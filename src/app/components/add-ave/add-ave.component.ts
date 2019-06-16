import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AvesService } from "../../services/aves.service";
import { LoginService } from "../../services/login.service";
import { GeolocationService } from "../../services/geolocation.service";
import { User } from "src/app/interfaces/user.interface";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "add-ave",
  templateUrl: "./add-ave.component.html",
  styleUrls: ["./add-ave.component.scss"]
})
export class AddAveComponent implements OnInit {
  constructor(
    private avesService: AvesService,
    private loginService: LoginService,
    private geoLocationService: GeolocationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  user: User = this.loginService.getCurrentUser();
  model = {
    idUser: this.user.id,
    bird_name: "",
    bird_description: "",
    place: "",
    long: null,
    lat: null
  };

  visto = false;

  setCoords() {
    if (this.visto) {
      const coords = this.getCoords();
      this.model.long = coords.long;
      this.model.lat = coords.lat;
    } else {
      this.model.long = null;
      this.model.lat = null;
    }
  }

  getCoords() {
    return this.geoLocationService.getPosition();
  }

  addBird(form: NgForm) {
    if (form.valid) {
      this.avesService.addAve(Object.assign({}, this.model)).subscribe(
        response => {
          if (response.status === "OK") {
            //controlamos los casos en que el servidor responda con status = OK al crear recurso
            this.openSnackBar(
              `Ave añadida con éxito: ${this.model.bird_name}`,
              "X"
            );
            this.router.navigate(["/lista"]);
          } else {
            this.openSnackBar(
              //controlamos los casos en que el servidor responda con status = NOK al crear recurso
              `Se ha producido un error: ${response.message}`,
              "X"
            );
          }
        },
        err => alert(err) //controlamos los casos en el Observable retorne un error por otros motivos (404 Not found, servidor no responde etc)
      );
    } else alert("Form no válido");
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
  ngOnInit() {
    this.geoLocationService.setPosition(); //capturamos datos de geolocalización al inicializar el componente
  }
}
