import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-text.component.html',
  styleUrl: './avatar-text.component.scss',
})
export class AvatarTextComponent {
  @Input() text: string = '';
  @Input() size: number = 40;
  bgColor: string = '';
  initials: string = '';

  ngOnInit() {
    this.bgColor = this.getRandomColor();
    this.initials = this.getInitials(this.text);
  }

  private getRandomColor(): string {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD', '#16A085'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .filter((char) => !!char)
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
