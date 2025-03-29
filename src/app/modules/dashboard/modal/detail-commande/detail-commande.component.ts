import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarTextClientComponent } from 'src/app/shared/components/avatar-text-client/avatar-text-client.component';
import { AvatarTextComponent } from 'src/app/shared/components/avatar-text/avatar-text.component';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';

@Component({
  selector: 'app-detail-commande',
  standalone: true,
  imports: [CommonModule, DivideComponent, AvatarTextComponent, AvatarTextClientComponent],
  templateUrl: './detail-commande.component.html',
  styleUrl: './detail-commande.component.scss',
})
export class DetailCommandeComponent {
  @Output() detailCommande = new EventEmitter<any | null>();

  cancel() {
    this.detailCommande.emit(null);
  }
}
