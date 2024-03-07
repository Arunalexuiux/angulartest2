import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainproduct3Component } from './mainproduct3.component';

describe('Mainproduct3Component', () => {
  let component: Mainproduct3Component;
  let fixture: ComponentFixture<Mainproduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mainproduct3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mainproduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
