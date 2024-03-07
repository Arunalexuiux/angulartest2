import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainproduct1Component } from './mainproduct1.component';

describe('Mainproduct1Component', () => {
  let component: Mainproduct1Component;
  let fixture: ComponentFixture<Mainproduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mainproduct1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mainproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
