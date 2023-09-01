import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Cool Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'TreeGuy',
      content: 'Saw this cool tree today. It was big and had a lot of leaves. '
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mike Snow',
      content: 'Here is a picture of a snowy mountain. '
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking3000',
      content: 'Biked for 5 hours straight today, all uphill!! '
    },
    {
      title: 'Beatufiul Sunset',
      imageUrl: 'assets/sunset.jpg',
      username: 'loves_to_travel',
      content: 'Beautiful pink sunset and snowy mountaintops along a deep sea.'
    },
    {
      title: 'Lightning',
      imageUrl: 'assets/lightning.jpg',
      username: 'the_flash',
      content: 'Look at this lightning picture!'
    },
    {
      title: 'Road from Above',
      imageUrl: 'assets/road.jpg',
      username: 'loves_to_travel',
      content: 'A photo of a winding road shot from above.'
    }
  ]
}
