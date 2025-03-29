import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTextClientComponent } from './avatar-text-client.component';

describe('AvatarTextClientComponent', () => {
  let component: AvatarTextClientComponent;
  let fixture: ComponentFixture<AvatarTextClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarTextClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarTextClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
