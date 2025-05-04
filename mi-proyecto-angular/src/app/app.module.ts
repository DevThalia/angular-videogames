import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HomeComponent,
        ListaComponent,
        DetalleComponent,
        RegistroComponent
    ],
    providers: [
        provideHttpClient() 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }