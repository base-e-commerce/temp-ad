import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DivideComponent } from '../divide/divide.component';

@Component({
  selector: 'app-profile-content-loading',
  standalone: true,
  imports: [CommonModule, DivideComponent],
  templateUrl: './profile-content-loading.component.html',
  styleUrl: './profile-content-loading.component.scss',
})
export class ProfileContentLoadingComponent {}
