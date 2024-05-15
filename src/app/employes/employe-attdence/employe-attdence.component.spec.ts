import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAttdenceComponent } from './employe-attdence.component';

describe('EmployeAttdenceComponent', () => {
  let component: EmployeAttdenceComponent;
  let fixture: ComponentFixture<EmployeAttdenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeAttdenceComponent]
    });
    fixture = TestBed.createComponent(EmployeAttdenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
