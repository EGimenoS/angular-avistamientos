import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ListaAvesComponent } from "./components/lista-aves/lista-aves.component";
import { AddAveComponent } from "./components/add-ave/add-ave.component";
import { DetalleAveComponent } from "./components/detalle-ave/detalle-ave.component";
import { LoginService } from "../../src/app/services/login.service";
import { AddAvistamientoComponent } from "./components/add-avistamiento/add-avistamiento.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "detalle/:id",
    component: DetalleAveComponent,
    canActivate: [LoginService]
  },
  {
    path: "añadir-avistamiento/:id",
    component: AddAvistamientoComponent,
    canActivate: [LoginService]
  },
  { path: "menu", component: MenuComponent, canActivate: [LoginService] },
  { path: "lista", component: ListaAvesComponent, canActivate: [LoginService] },
  {
    path: "añadir-ave",
    component: AddAveComponent,
    canActivate: [LoginService]
  },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
