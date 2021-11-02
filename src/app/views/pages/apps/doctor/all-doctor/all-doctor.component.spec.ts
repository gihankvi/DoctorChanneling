import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorComponent } from './all-doctor.component';

describe('AllDoctorComponent', () => {
  let component: AllDoctorComponent;
  let fixture: ComponentFixture<AllDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
