import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAveComponent } from './add-ave.component';

describe('AddAveComponent', () => {
  let component: AddAveComponent;
  let fixture: ComponentFixture<AddAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
