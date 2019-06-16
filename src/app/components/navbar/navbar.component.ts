import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { User } from "../../interfaces/user.interface";
import { Location } from "@angular/common"; //usamos la api Location para que al pulsar el botón "volver" soiempre vuelvas a la ruta anterior.

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private location: Location) {}

  userInfo(): User {
    return this.loginService.getCurrentUser();
  }

  backClicked() {
    this.location.back(); //al pulsar el botón volvemos a la página anterior. Es accesible desde todas las vistas.
  }

  ngOnInit() {}
}
