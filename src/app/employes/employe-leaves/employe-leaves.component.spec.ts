import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeLeavesComponent } from './employe-leaves.component';

describe('EmployeLeavesComponent', () => {
  let component: EmployeLeavesComponent;
  let fixture: ComponentFixture<EmployeLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeLeavesComponent]
    });
    fixture = TestBed.createComponent(EmployeLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
