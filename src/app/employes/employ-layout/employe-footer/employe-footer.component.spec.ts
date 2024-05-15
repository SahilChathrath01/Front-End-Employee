import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeFooterComponent } from './employe-footer.component';

describe('EmployeFooterComponent', () => {
  let component: EmployeFooterComponent;
  let fixture: ComponentFixture<EmployeFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeFooterComponent]
    });
    fixture = TestBed.createComponent(EmployeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
