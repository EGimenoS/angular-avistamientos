import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router, CanActivate } from "@angular/router";
import { baseUrl } from "../../config";


@Injectable({
  providedIn: "root"
})
export class LoginService {
  user: User;

  constructor(private http: HttpClient, private router: Router) {}

  // guard para aplicar en las rutas y evitar que users no autenticados accedan a pantallas
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }

  //devuelve el usuario logueado actualmente
  getCurrentUser(): User {
    return this.user;
  }

  //determinamos si hay un usuario logueado o no para usar la guardia 
  isAuthenticated(): Boolean {
    return !!this.user.id;
  }
  //post request a la API de usuarios.
  callService(user: User): Observable<any> {
    const loginURL = `${baseUrl}/login`
    this.user = user;
    return this.http.post(loginURL, {
      user: this.user.user,
      password: this.user.password
    });
  }

  //determinar token id del user para enviar en llamadas a API
  setUserId(id: string) {
    this.user.id = id;
  }

  //se destruye el user actual en logout
  destroyUser() {
    this.user = {
      user: "",
      password: "",
      id: ""
    };
  }
}
