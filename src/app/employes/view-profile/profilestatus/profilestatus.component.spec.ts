import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestatusComponent } from './profilestatus.component';

describe('ProfilestatusComponent', () => {
  let component: ProfilestatusComponent;
  let fixture: ComponentFixture<ProfilestatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilestatusComponent]
    });
    fixture = TestBed.createComponent(ProfilestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
