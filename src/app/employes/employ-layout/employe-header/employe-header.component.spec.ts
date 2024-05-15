import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeHeaderComponent } from './employe-header.component';

describe('EmployeHeaderComponent', () => {
  let component: EmployeHeaderComponent;
  let fixture: ComponentFixture<EmployeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeHeaderComponent]
    });
    fixture = TestBed.createComponent(EmployeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
