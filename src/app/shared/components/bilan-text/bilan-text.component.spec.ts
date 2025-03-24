import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanTextComponent } from './bilan-text.component';

describe('BilanTextComponent', () => {
  let component: BilanTextComponent;
  let fixture: ComponentFixture<BilanTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
