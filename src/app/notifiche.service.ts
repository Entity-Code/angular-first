import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  //inizializziamo un array di notifiche vuoto
  notifiche: String[] = [];

  //metodo aggiungi notifica
  aggiungiNotifica(notifica: String): void {
    this.notifiche.push(notifica);
  }
  //metodo cancella notifiche
  cancellaNotifiche(): void {
    this.notifiche = [];
  }
  
  constructor() { }
}
