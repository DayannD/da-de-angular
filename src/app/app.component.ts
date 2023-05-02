import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Toto';
  cardListRow = [
    {text: 'This is a card'},
    {text: 'This is a card'},
    {text: 'This is a card'},
  ];
  cardListColumn = [
    {text: 'This is a card'},
    {text: 'This is a card'},
    {text: 'This is a card'},
  ]
}
