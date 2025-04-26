import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { AppComponent } from './app.component';  // Componente principal
import { AppRoutingModule } from './app-routing.module'; // Archivo de rutas

// Importamos los componentes standalone
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,  // AppRoutingModule para las rutas
        RouterModule,  // RouterModule para las directivas de navegación
        HomeComponent,  // Importamos el componente standalone
        ListaComponent,  // Importamos el componente standalone
        DetalleComponent,  // Importamos el componente standalone
    ],
    bootstrap: [AppComponent]  // Componente principal de arranque
})
export class AppModule { }
