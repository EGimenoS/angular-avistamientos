import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AvesService } from "../../services/aves.service";
import { GeolocationService } from "../../services/geolocation.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "add-avistamiento",
  templateUrl: "./add-avistamiento.component.html",
  styleUrls: ["./add-avistamiento.component.scss"]
})
export class AddAvistamientoComponent implements OnInit {
  constructor(
    private avesService: AvesService,
    private geoLocationService: GeolocationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  model = {
    idAve: +this.route.snapshot.paramMap.get("id"),
    place: "",
    long: null,
    lat: null
  };

  getCoords() {
    return this.geoLocationService.getPosition();
  }

  setCoords() {
    const coords = this.getCoords();
    this.model.long = coords.long;
    this.model.lat = coords.lat;
  }

  addAvistamiento(form: NgForm) {
    if (form.valid) {
      this.avesService
        .addAvistamiento(Object.assign({}, this.model))
        .subscribe(response => { console.log(response)
          if (response.status === "OK") { //controlamos los casos en que el servidor responda con status = OK al crear recurso
            this.openSnackBar(
              `Avistamiento añadido con éxito: ${this.model.place}`,
              "X"
            );
            this.router.navigate(["/lista"]);
          } else {
            this.openSnackBar( //controlamos los casos en que el servidor responda con status = NOK al crear recurso
              `Se ha producido un error: ${response.message}`,
              "X"
            );
          }
          
        }, err => alert(err)); //controlamos los casos en el Observable retorne un error por otros motivos (404 Not found, servidor no responde etc)
    }
  }
  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
  ngOnInit() {
    this.geoLocationService.setPosition(); //capturamos datos de geolocalización al inicializar el componente
    this.setCoords(); //Se añaden los datos de long y lat recuperados al modelo del formulario
  }
}
