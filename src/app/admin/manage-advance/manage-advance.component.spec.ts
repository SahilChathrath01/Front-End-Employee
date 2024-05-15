import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdvanceComponent } from './manage-advance.component';

describe('ManageAdvanceComponent', () => {
  let component: ManageAdvanceComponent;
  let fixture: ComponentFixture<ManageAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAdvanceComponent]
    });
    fixture = TestBed.createComponent(ManageAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
