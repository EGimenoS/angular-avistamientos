//servicio para gestionar comunicación con el backend (webservice avistamiento aves)

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { HttpHeaders } from "@angular/common/http";
import { baseUrl } from "../../config";

@Injectable({
  providedIn: "root"
})
export class AvesService {
  userId: string; //id del usuario logueado

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.userId = loginService.getCurrentUser().id; //en el constructor de la clase, dejamos definido el id de user que usaremos en alguna de las consultas
    console.log(this.userId);
  }

  getListadoAves(): Observable<any> {
    const url = `${baseUrl}/getBirds/${this.userId}`; //construcción de url para obtener listado de aves
    return this.http.get(url);
  }

  addAve(ave): Observable<any> {
    const url = `${baseUrl}/addBird/`; //construcción de url para añadir ave
    const payload = JSON.stringify(ave);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(url, payload, httpOptions);
  }

  addAvistamiento(avistamiento): Observable<any> {
    const url = `${baseUrl}/addSighting/`; //construcción de url para añadir avistamiento
    const payload = JSON.stringify(avistamiento);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(url, payload, httpOptions);
  }

  getDetailAve(id: number): Observable<any> {
    const url = `${baseUrl}/getBirdDetails/${id}`; //construcción de url para obtener detalle de de aves
    return this.http.get(url);
  }
}
