import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { HeaderInfo } from 'src/app/core/interface/header-global';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss',
})
export class GlobalHeaderComponent {
  @Input() data!: HeaderInfo;
  @Input() rightContent: TemplateRef<any> | undefined;
}
