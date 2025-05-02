import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HomeComponent,
        ListaComponent,
        DetalleComponent
    ],
    providers: [
        provideHttpClient() 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }