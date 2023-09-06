import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {name: 'Geralt', age: 100, job: 'Witcher', employed: true},
    {name: 'Yennefer', age: 90, job: 'Sorceress', employed: true},
    {name: 'Triss', age: 40, job: 'Magic', employed: true},
    {name: 'Jaskier', age: 40, job: 'Bard', employed: false},
    {name: 'Ciri', age: 21, job: 'Princess', employed: false}
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
    { key: 'employed', label: 'Employed'}
  ]; 
}
