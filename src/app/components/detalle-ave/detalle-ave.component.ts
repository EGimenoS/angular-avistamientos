import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AvesService } from "../../services/aves.service";

@Component({
  selector: "app-detalle-ave",
  templateUrl: "./detalle-ave.component.html",
  styleUrls: ["./detalle-ave.component.scss"]
})
export class DetalleAveComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private avesService: AvesService
  ) {}
  public cargando = true;
  public verTabla = false; //boolean para enseñar u ocultar tabla de avistamientos en función de acción de usuario
  public displayedColumns: string[] = ["id", "place", "long", "lat"]; //se definen las columnas a mostrar en la tabla de avistamientos
  toggleVerTabla() {
    this.verTabla = !this.verTabla;
    console.log(this.verTabla);
  }
  private id: number = +this.route.snapshot.paramMap.get("id"); //recuperamos el id de la ruta para acceder al ave que nos interesa
  public ave: any;
  ngOnInit() {
    // al iniciar el componente cargamos los datos del ave
    this.avesService.getDetailAve(this.id).subscribe(response => {
      this.ave = response[0]; //la respuesta viene como un array de un elemento, extraemos el objeto que nos interesa
      this.cargando = false; //Cuando termina la request, se va el spinner
    }, err => alert(err)); //se controla el error mostrando alerta
  }
}
