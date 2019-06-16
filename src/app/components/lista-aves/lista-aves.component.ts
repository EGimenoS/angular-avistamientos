import { Component, OnInit } from "@angular/core";
import { AvesService } from "../../services/aves.service";

@Component({
  selector: "lista-aves",
  templateUrl: "./lista-aves.component.html",
  styleUrls: ["./lista-aves.component.scss"]
})
export class ListaAvesComponent implements OnInit {
  constructor(private avesService: AvesService) {}
  cargando: boolean = true; //declaramos propiedad que se usa como flag para mostrar o no el spinner de carga
  public aves: any;

  ngOnInit() {
    //al iniciar el componente cargamos la lista de aves.
    this.avesService.getListadoAves().subscribe(
      response => {
        if (response.status !== "NOK") {
          //si response no contiene status ha devuelto una lista de aves
          this.aves = response;
          this.cargando = false; //Cuando termina la request, se va el spinner
        } else alert(`se ha producido un error ${response.message}`); //en caso contrario el webservice response NOK con el mensaje de error
      },
      err => alert(err) //controlamos casos donde el servidor da otro tipo de errores: Not found, servidor no responde etc.
    );
  }
}
