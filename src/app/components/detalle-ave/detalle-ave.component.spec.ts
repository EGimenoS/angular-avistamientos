import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAveComponent } from './detalle-ave.component';

describe('DetalleAveComponent', () => {
  let component: DetalleAveComponent;
  let fixture: ComponentFixture<DetalleAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
