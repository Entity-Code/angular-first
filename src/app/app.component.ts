import { Component } from '@angular/core';



//serve a definire: 
@Component({
  //Come chiamiamo il nostro componente dell'html
  selector: 'app-root',
  //Dove è definito l'html del componente
  templateUrl: './app.component.html',
  //Dove è definito lo stile/stili del componente
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tour-degli-eroi';
}
