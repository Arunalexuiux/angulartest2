import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainproduct2Component } from './mainproduct2.component';

describe('Mainproduct2Component', () => {
  let component: Mainproduct2Component;
  let fixture: ComponentFixture<Mainproduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mainproduct2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mainproduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
