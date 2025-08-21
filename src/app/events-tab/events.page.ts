import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
  imports: [IonToolbar, IonCardContent, IonCardHeader, IonHeader, IonContent, IonCard, CommonModule],
})
export class EventsPage {
  events: any[] = [
    {
      background: 'url("/assets/neon.jpg") center/cover'
    },
    {
      background: 'url("/assets/karaoke.jpg") center/cover'
    },
    {
      background: 'url("/assets/trivia.png") center/cover'
    },
  ];
  constructor() {}
}
