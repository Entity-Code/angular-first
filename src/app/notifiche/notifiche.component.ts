import { Component, OnInit } from '@angular/core';
import { NotificheService } from '../notifiche.service';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.scss']
})
export class NotificheComponent implements OnInit {

  constructor(public notifiche: NotificheService) { }

  ngOnInit(): void {
  }

}
