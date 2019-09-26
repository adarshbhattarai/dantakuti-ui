import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDoctorComponent } from './date-doctor.component';

describe('DateDoctorComponent', () => {
  let component: DateDoctorComponent;
  let fixture: ComponentFixture<DateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
