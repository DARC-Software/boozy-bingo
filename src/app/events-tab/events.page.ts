import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: "app-events",
  templateUrl: "events.page.html",
  styleUrls: ["events.page.scss"],
  imports: [IonToolbar, IonCardContent, IonCardHeader, IonHeader, IonContent, IonCard, CommonModule],
})
export class EventsPage {
  events: any[] = [
    {
      background: "url('/assets/neon.jpg') center/cover",
      title: "Boozy Bingo",
      venue: "Unleashed Camden",
      addressLine: "258 Haddock Rd",
      addressLine2: "",
      city: "Kingsland",
      state: "GA",
      zipCode: 31548,
      startTime: "2025-08-21T09:30:00Z",
      prizes: ["PS4", "Blackstone Grill", "Vitamix Blender"],
      musicGenre: ["Funk", "Punk"]
    },
    {
      background: "url('/assets/karaoke.jpg') center/cover",
      title: "Krazy Karaoke",
      venue: "Lane 21 Lounge",
      addressLine: "850822 Hwy 17",
      addressLine2: "",
      city: "Yulee",
      state: "FL",
      zipCode: 32097,
      startTime: "2025-08-21T14:00:00Z",
      prizes: ["PS4", "Blackstone Grill", "Vitamix Blender"],
      musicGenre: ["R&B Mix"]
    },
    {
      background: "url('/assets/trivia.png') center/cover",
      title: "Tipsy Trivia",
      venue: "Okane's",
      addressLine: "463711 State Rd 200",
      addressLine2: "",
      city: "Yulee",
      state: "FL",
      zipCode: 32097,
      startTime: "2025-08-21T19:45:00Z",
      prizes: ["PS4", "Blackstone Grill", "Vitamix Blender"],
      musicGenre: ["Early 2000's"]
    },
  ];
  constructor() {}
}
