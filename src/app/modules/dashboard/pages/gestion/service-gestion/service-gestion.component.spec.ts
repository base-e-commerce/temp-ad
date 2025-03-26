import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGestionComponent } from './service-gestion.component';

describe('ServiceGestionComponent', () => {
  let component: ServiceGestionComponent;
  let fixture: ComponentFixture<ServiceGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
