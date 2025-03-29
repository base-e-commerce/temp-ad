import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContentLoadingComponent } from './profile-content-loading.component';

describe('ProfileContentLoadingComponent', () => {
  let component: ProfileContentLoadingComponent;
  let fixture: ComponentFixture<ProfileContentLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileContentLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
