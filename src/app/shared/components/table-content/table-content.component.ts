import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
})
export class TableContentComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
}
