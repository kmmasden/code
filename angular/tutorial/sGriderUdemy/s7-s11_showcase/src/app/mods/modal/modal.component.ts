import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() close = new EventEmitter(); 

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement); 
  }

  onCloseClick() {
    this.close.emit(); 
  }

  ngOnInit() {
    document.body.append(this.el.nativeElement); 
  }

  ngOnDestroy() {
    this.el.nativeElement.remove(); 
  }
}
