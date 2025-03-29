import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanLoadingComponent } from './bilan-loading.component';

describe('BilanLoadingComponent', () => {
  let component: BilanLoadingComponent;
  let fixture: ComponentFixture<BilanLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
