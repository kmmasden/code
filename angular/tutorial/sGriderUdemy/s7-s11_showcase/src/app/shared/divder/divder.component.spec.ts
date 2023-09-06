import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivderComponent } from './divder.component';

describe('DivderComponent', () => {
  let component: DivderComponent;
  let fixture: ComponentFixture<DivderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivderComponent]
    });
    fixture = TestBed.createComponent(DivderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
