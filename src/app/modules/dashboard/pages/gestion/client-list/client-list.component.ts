import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';
import { CreateClientComponent } from '../../../modal/create-client/create-client.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, GlobalHeaderComponent, DivideComponent, TableContentComponent, MapComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
})
export class ClientListComponent {
  dataInfo: HeaderInfo = {
    title: 'Clients',
    subtitle: 'Gestion',
  };

  tableHeaders = ['Name', 'Time Left', 'View', 'Title', 'View', 'Reel Image'];

  tableData = [
    {
      title: 'Alice Dupont',
      timeLeft: '3h 15m',
      view: 'Voir Détails',
      subtitle: 'Exploration en Montagne',
      image: 'https://ratovonirina.onrender.com/assets/images/me4.jpg',
    },
    {
      title: 'Bob Martin',
      timeLeft: '2h 45m',
      view: 'Voir Détails',
      subtitle: 'Vie Urbaine Nocturne',
      image: 'https://ratovonirina.onrender.com/assets/images/me4.jpg',
    },
    {
      title: 'Charlie Bernard',
      timeLeft: '4h 10m',
      view: 'Voir Détails',
      subtitle: 'Aventures Sous-Marines',
      image: 'https://ratovonirina.onrender.com/assets/images/me4.jpg',
    },
    {
      title: 'Diana Lefevre',
      timeLeft: '1h 30m',
      view: 'Voir Détails',
      subtitle: 'Délices Culinaires',
      image: 'https://ratovonirina.onrender.com/assets/images/me4.jpg',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openCreateClient() {
    const dialogRef = this.dialog.open<CreateClientComponent>(CreateClientComponent, {
      width: '500px',
    });
    dialogRef.componentInstance.clientCreated.subscribe((res) => {
      dialogRef.close();
    });
  }
}
