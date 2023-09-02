import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0; 
  images = [
    {
      title: 'At the Beach',
      url: 'https://plus.unsplash.com/premium_photo-1675826774817-c15cf80ece32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title2',
      url: 'https://images.unsplash.com/photo-1690476072829-89d745667529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title 3',
      url: 'https://images.unsplash.com/photo-1577504705206-f8ac22d1a20a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    
    },
    {
      title: 'Hot Air Balloons',
      url: 'https://images.unsplash.com/photo-1690828850555-bd808ba5691a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzI3NzYwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://plus.unsplash.com/premium_photo-1675826774817-c15cf80ece32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title2',
      url: 'https://images.unsplash.com/photo-1690476072829-89d745667529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title 3',
      url: 'https://images.unsplash.com/photo-1577504705206-f8ac22d1a20a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    
    },
    {
      title: 'Hot Air Balloons',
      url: 'https://images.unsplash.com/photo-1690828850555-bd808ba5691a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzI3NzYwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://plus.unsplash.com/premium_photo-1675826774817-c15cf80ece32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title2',
      url: 'https://images.unsplash.com/photo-1690476072829-89d745667529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Title 3',
      url: 'https://images.unsplash.com/photo-1577504705206-f8ac22d1a20a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    
    },
    {
      title: 'Hot Air Balloons',
      url: 'https://images.unsplash.com/photo-1690828850555-bd808ba5691a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzI3NzYwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5; 
  }
}
