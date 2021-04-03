import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//input è un decoratore (funzione)
import { Eroe } from '../eroe';
import { EroeService } from '../eroe.service';

@Component({
  selector: 'dettagli-eroe',
  templateUrl: './dettagli-eroe.component.html',
  styleUrls: ['./dettagli-eroe.component.scss']
})
export class DettagliEroeComponent implements OnInit {

  eroeDaVisualizzare: Eroe;

  constructor(
    private servizioEroi: EroeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //il + converte tutto in un numero
    const id = +this.route.snapshot.paramMap.get('id');
    this.servizioEroi.getEroe(id).subscribe(eroe => this.eroeDaVisualizzare = eroe)
  }

}
