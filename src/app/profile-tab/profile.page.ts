import { Component } from '@angular/core';
import { IonHeader, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [IonHeader, IonContent],
})
export class ProfilePage {
  constructor() {}
}
