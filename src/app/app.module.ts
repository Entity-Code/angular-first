import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import FormsModule per l'utilizzo dell'ngModule
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EroiComponent } from './eroi/eroi.component';
import { DettagliEroeComponent } from './dettagli-eroe/dettagli-eroe.component';
import { NotificheComponent } from './notifiche/notifiche.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  //dichiarazioni componenti
  declarations: [
    AppComponent, //modulo di base dell'applicazione
    EroiComponent,
    DettagliEroeComponent,
    NotificheComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
