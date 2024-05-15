import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAdvanceComponent } from './employe-advance.component';

describe('EmployeAdvanceComponent', () => {
  let component: EmployeAdvanceComponent;
  let fixture: ComponentFixture<EmployeAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeAdvanceComponent]
    });
    fixture = TestBed.createComponent(EmployeAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
