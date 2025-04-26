import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListaComponent,
        DetalleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
