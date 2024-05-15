
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAttendanceComponent } from './manage-attendance.component';

describe('ManageAttendanceComponent', () => {
  let component: ManageAttendanceComponent;
  let fixture: ComponentFixture<ManageAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAttendanceComponent]
    });
    fixture = TestBed.createComponent(ManageAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
