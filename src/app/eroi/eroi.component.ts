import { Component, OnInit } from '@angular/core';
//interfaccia
import { Eroe } from '../eroe';
//PRENDERE DATI DAL SERVICE:
//1)Importiamo il file del servizio (.ts)
import { EroeService } from '../eroe.service';
//2)Il servizio deve essere 'injectato' all'interno di un qualsiasi componente APPENA VIENE CREATO, passando il service come parametro nel constructor
import { Subscription } from 'rxjs';

import { NotificheService } from '../notifiche.service';


@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.scss']
})
export class EroiComponent implements OnInit {
  //creazione proprietà del nostro componente

  eroi: Eroe[]; //eroe.service.ts

  //creiamo
  subscription: Subscription;

  eroeSelezionato: Eroe;

  //methods

  //possiamo usare ts anche nei parametri
  // : valoreRitornato (se non ritorna nulla : void)
  onSelect(eroe: Eroe): void { 
    this.eroeSelezionato = eroe;
    this.notifiche.aggiungiNotifica(`(${eroe.id}) ${eroe.nome} è stato aggiunto!`);
  }

  //3)Dichiariamo un'istanza privata (accessibile solo all'interno di questa classe) del servizio appena creato
  constructor(
    private eroeService: EroeService,
    public notifiche: NotificheService
  ) { }

  //metodo di angular che fa parte dei life cycles (cicli vitali)
  //la logica che inseriamo qui viene eseguita subito dopo la creazione di un componente
  ngOnInit(): void {
    //salviamo tutta questa iscrizione nella proprietà subscription...
    this.subscription = this.eroeService.getEroi().subscribe(
      //eguagliamo eroi ricevuto con il nostro sopra tramite una funzione nel subscribe
      (eroi) => this.eroi = eroi
    );
  }
  //...che riutilizziamo nella ngOnDestroy per cancellare l'iscrizione
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
