import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentUrl: string = ''; 

  constructor(private photoService : PhotoService) {
    this.fetchPhoto(); 
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getRandomPhoto().subscribe(response => {
      this.currentUrl = response.urls.small; 
    }); 
  }

}
