import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, DivideComponent],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss',
})
export class CreateClientComponent {
  @Output() clientCreated = new EventEmitter<any | null>();


  cancel() {
    this.clientCreated.emit(null);
  }
}
