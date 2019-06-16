// se extrae la lógica para gestionar geolcalización ya que se usa en más de 1 componente
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GeolocationService {
  constructor() {}
  coords = { long: null, lat: null }; 
  getPosition() {
    return this.coords; //getter de propiedad coords para que sea accesible desde los componentes.
  }
  setPosition() { //obtiene las coordenadas mediante la api geolocation de HTML5 y las almacena en propiedad coords.
    if (!navigator.geolocation) {
      alert("Geolocalización no disponible");
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        this.coords = { long: long, lat: lat };
      });
    }
  }
}
