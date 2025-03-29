import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-bilan',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, RouterLink],
  templateUrl: './bilan.component.html',
  styleUrl: './bilan.component.scss',
})
export class BilanComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() subtitle: string = '';
  @Input() color: string = '';
  @Input() value: number = 0;
  @Input() url?: string = '';
}
