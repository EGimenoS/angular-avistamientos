import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  logOut() { //al pulsar el botón de "SALIR", deslogueamos el usuario y navegamos a la pantalla de login
    this.loginService.destroyUser()
    this.router.navigate(['/login'])
  }
  ngOnInit() {}
}
