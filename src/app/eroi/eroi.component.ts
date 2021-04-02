import { Component, OnInit } from '@angular/core';
//interfaccia
import { Eroe } from '../eroe';
//lista eroi (finti-eroi.ts)
import { fintiEroi } from '../finti-eroi';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.scss']
})
export class EroiComponent implements OnInit {
  //creazione proprietà del nostro componente

  eroi: Eroe[] = fintiEroi; //finti-eroi.ts

  eroeSelezionato: Eroe;

  //methods

  //possiamo usare ts anche nei parametri
  // : valoreRitornato (se non ritorna nulla : void)
  onSelect(eroe: Eroe): void { 
    this.eroeSelezionato = eroe;
  }

  constructor() { }

  //metodo di angular che fa parte dei life cycles (cicli vitali)
  ngOnInit(): void {
    //la logica che inseriamo qui viene eseguita subito dopo la creazione di un componente
  }

}
