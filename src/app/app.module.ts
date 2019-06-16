import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import { ListaAvesComponent } from './components/lista-aves/lista-aves.component';
import { AddAveComponent } from './components/add-ave/add-ave.component';
import { DetalleAveComponent } from './components/detalle-ave/detalle-ave.component';
import { AddAvistamientoComponent } from './components/add-avistamiento/add-avistamiento.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    ListaAvesComponent,
    AddAveComponent,
    DetalleAveComponent,
    AddAvistamientoComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
