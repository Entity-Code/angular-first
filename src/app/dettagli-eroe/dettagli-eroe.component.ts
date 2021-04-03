import { Component, OnInit, Input } from '@angular/core';
//input è un decoratore (funzione)
import { Eroe } from '../eroe';

@Component({
  selector: 'dettagli-eroe',
  templateUrl: './dettagli-eroe.component.html',
  styleUrls: ['./dettagli-eroe.component.scss']
})
export class DettagliEroeComponent implements OnInit {

  @Input() eroeDaVisualizzare: Eroe;

  constructor() { }

  ngOnInit(): void {
  }

}
