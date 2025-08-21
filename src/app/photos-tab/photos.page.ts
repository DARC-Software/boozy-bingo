import { Component } from '@angular/core';
import { IonHeader, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss'],
  imports: [IonHeader, IonContent]
})
export class PhotosPage {

  constructor() {}

}
