import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { ProfileContentLoadingComponent } from 'src/app/shared/components/profile-content-loading/profile-content-loading.component';

@Component({
  selector: 'app-detail-client',
  standalone: true,
  imports: [CommonModule, DivideComponent, ProfileContentLoadingComponent],
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.scss',
})
export class DetailClientComponent {
  @Output() detailClient = new EventEmitter<any | null>();

  cancel() {
    this.detailClient.emit(null);
  }
}
