import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false; 

  items = [ 
    { question: 'Area 51 is located in which U S state?', answer: 'Nevada'},
    { question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?', answer: 'India'},
    { question: 'Which country borders 14 nations and crosses 8 time zones?', answer: 'Russia'},
    { question: 'In what country would you find Lake Bled?', answer: 'Slovenia'},
    { question: 'How many hearts does an octopus have?', answer: '3'},
    { question: 'Which monarch officially made Valentine\'s Day a holiday in 1537?', answer: 'Henry VIII'}
  ];


  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
