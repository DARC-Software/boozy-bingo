import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class PhotosPage {

  constructor() {}

}
