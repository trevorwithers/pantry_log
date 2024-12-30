import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonIcon, 
  IonFabButton, 
  IonRow, 
  IonCol,
  IonGrid, // Import IonGrid
  IonSearchbar, // Import IonSearchbar
  IonCard, // Import IonCard
  IonCardHeader, // Import IonCardHeader
  IonCardTitle, // Import IonCardTitle
  IonCardContent, // Import IonCardContent
  IonList, // Import IonList
  IonItem, // Import IonItem
  IonLabel, // Import IonLabel
  IonBadge, // Import IonBadge
  IonFab // Import IonFab
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent, 
    IonIcon, 
    IonFabButton, 
    IonRow, 
    IonCol, 
    IonGrid, 
    IonSearchbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonBadge, 
    IonFab 
  ],
})
export class Tab1Page {
  constructor() {}
}