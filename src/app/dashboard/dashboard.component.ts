import { Component, OnInit } from '@angular/core';
import { Eroe } from '../eroe';
import { EroeService } from '../eroe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  miglioriEroi: Eroe[];

  constructor(private eroiServizio: EroeService) { }

  ngOnInit(): void {
    this.eroiServizio.getEroi().subscribe(
      eroi => this.miglioriEroi = eroi.slice(0, 3)
    )
  }

}
