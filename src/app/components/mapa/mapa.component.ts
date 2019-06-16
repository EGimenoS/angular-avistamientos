import { Component, OnInit, Input } from "@angular/core";
import {
  icon,
  latLng,
  marker,
  tileLayer,
  Layer,
  Map,
  featureGroup
} from "leaflet";

@Component({
  selector: "mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"]
})
export class MapaComponent implements OnInit {
  @Input() avistamientos: any;
  constructor() {}
  options: any; //opciones de mapa de Leaflet

  markers: Layer[] = []; //se declara array de markers que mostrarn los avistamientos

  addMarker(long: number, lat: number, place: string) {
    //método para añadir un marker al array de markers
    const newMarker = marker([lat, long], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/marker-icon.png",
        shadowUrl: "assets/marker-shadow.png"
      })
    });
    newMarker.bindPopup(`lat: ${lat} long: ${long} lugar: ${place}`); //a cada marker le añadimos un pop up que se dispara al clickar sobre el marker con info extra.
    this.markers.push(newMarker);
  }

  setMarkers() {
    //construye el array de markers en función del array de avistamientos que recibimos
    this.avistamientos.forEach(avistamiento => {
      const long = avistamiento.long;
      const lat = avistamiento.lat;
      if (this.validLong(long) && this.validLat(lat)) {
        this.addMarker(long, lat, avistamiento.place); //añadimos el marker solo si la longitud y la latitud son válidas.
      }
    });
  }

  validLong(long) {
    if (!isNaN(long) && Math.abs(long) < 180 && long !== "") {
      return true;
    } else return false;
  }

  validLat(lat) {
    if (!isNaN(lat) && Math.abs(lat) < 90 && lat !== "") {
      return true;
    } else return false;
  }

  setOptions() {
    //inicialización de array de opciones
    this.options = {
      layers: [
        tileLayer("http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
          attribution: "..."
        })
      ]
    };
  }

  onMapReady(map: Map) {
    //redimensión de mapa en función de posición de los markers sobre el mismo
    const group = featureGroup(this.markers);
    map.fitBounds(group.getBounds());
  }

  ngOnInit() {
    console.log(this.avistamientos);
    this.setMarkers();
    this.setOptions();
  }
}
