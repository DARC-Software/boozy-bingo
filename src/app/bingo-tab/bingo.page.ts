import { Component } from '@angular/core';
import { IonHeader, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bingo',
  templateUrl: 'bingo.page.html',
  styleUrls: ['bingo.page.scss'],
  imports: [IonHeader, IonContent],
})
export class BingoPage {
  constructor() {}
}
