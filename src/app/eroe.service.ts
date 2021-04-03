import { Injectable } from '@angular/core';
import { fintiEroi } from './finti-eroi';
import { Eroe } from './eroe';
//import observables
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
//importiamo il servizio Notifiche
import { NotificheService } from './notifiche.service';

@Injectable({
  //root = servizio condiviso in tutta l'app
  providedIn: 'root' 
})
  
//All'interno di questo servizio possiamo creare un metodo che ritorna dei dati (in questo caso il nostro array di eroi)
export class EroeService {

  getEroi(): Observable<Eroe[]> {
    this.notifiche.aggiungiNotifica('Eroi Aggiunti!');
    return of(fintiEroi);
  }

  //injectiamo il servizio notifiche in questo servizio
  constructor(private notifiche: NotificheService) { }
}
