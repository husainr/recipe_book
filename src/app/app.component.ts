import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4lHAx587FjF_s3owjO7vl2pYPhlehe7E',
      authDomain: 'recipebook-9508e.firebaseapp.com'
    });
  }

}