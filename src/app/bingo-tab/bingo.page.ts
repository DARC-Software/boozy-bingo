import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bingo',
  templateUrl: 'bingo.page.html',
  styleUrls: ['bingo.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class BingoPage {
  constructor() {}
}
