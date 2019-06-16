import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvistamientoComponent } from './add-avistamiento.component';

describe('AddAvistamientoComponent', () => {
  let component: AddAvistamientoComponent;
  let fixture: ComponentFixture<AddAvistamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAvistamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAvistamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
