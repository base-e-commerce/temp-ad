import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeTwoComponent } from './page-home-two.component';

describe('PageHomeTwoComponent', () => {
  let component: PageHomeTwoComponent;
  let fixture: ComponentFixture<PageHomeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHomeTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
