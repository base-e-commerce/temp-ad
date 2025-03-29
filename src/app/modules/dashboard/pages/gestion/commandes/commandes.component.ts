import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';
import { DetailCommandeComponent } from '../../../modal/detail-commande/detail-commande.component';
import { DetailClientComponent } from '../../../modal/detail-client/detail-client.component';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule, DivideComponent, GlobalHeaderComponent, TableContentComponent],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.scss',
})
export class CommandesComponent {
  dataInfo: HeaderInfo = {
    title: 'Commandes',
    subtitle: 'Gestion',
  };

  tableHeaders = ['ID Commande', 'Client', 'Produit', 'Quantité', 'Statut', 'Action'];

  tableData = [
    {
      id: 'CMD001',
      client: 'Alice Dupont',
      produit: 'Ordinateur Portable',
      quantite: 2,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD002',
      client: 'Bob Martin',
      produit: 'Smartphone',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD003',
      client: 'Charlie Bernard',
      produit: 'Écouteurs Bluetooth',
      quantite: 3,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD004',
      client: 'Diana Lefevre',
      produit: 'Tablette',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD005',
      client: 'Eve Durand',
      produit: 'Montre Connectée',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD006',
      client: 'Frank Leroy',
      produit: 'Casque Gaming',
      quantite: 2,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD007',
      client: 'Grace Martin',
      produit: 'Clavier Mécanique',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD008',
      client: 'Hank Dupont',
      produit: 'Souris sans Fil',
      quantite: 3,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD009',
      client: 'Ivy Bernard',
      produit: 'Imprimante 3D',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD010',
      client: 'Jack Lefevre',
      produit: 'Caméra de Surveillance',
      quantite: 2,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD011',
      client: 'Kate Martin',
      produit: 'Enceinte Bluetooth',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD012',
      client: 'Leo Dupont',
      produit: 'Drone',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD013',
      client: 'Mia Bernard',
      produit: 'Téléviseur 4K',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD014',
      client: 'Nina Lefevre',
      produit: 'Console de Jeux',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD015',
      client: 'Oliver Martin',
      produit: 'Aspirateur Robot',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD016',
      client: 'Paul Dupont',
      produit: 'Machine à Café',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD017',
      client: 'Quentin Bernard',
      produit: 'Réfrigérateur Connecté',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD018',
      client: 'Rachel Lefevre',
      produit: 'Four à Micro-ondes',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD019',
      client: 'Sam Martin',
      produit: 'Lave-linge',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD020',
      client: 'Tina Dupont',
      produit: 'Sèche-linge',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD021',
      client: 'Uma Bernard',
      produit: 'Robot de Cuisine',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD022',
      client: 'Victor Lefevre',
      produit: 'Grille-pain',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD023',
      client: 'Walter Martin',
      produit: 'Mixeur',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD024',
      client: 'Xavier Dupont',
      produit: 'Fer à Repasser',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD025',
      client: 'Yves Bernard',
      produit: "Chauffage d'appoint",
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD026',
      client: 'Zoe Lefevre',
      produit: 'Ventilateur',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD027',
      client: 'Alice Martin',
      produit: 'Lampe de Bureau',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD028',
      client: 'Bob Dupont',
      produit: 'Chaise de Bureau',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD029',
      client: 'Charlie Lefevre',
      produit: 'Bureau',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD030',
      client: 'Diana Bernard',
      produit: 'Étagère',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD031',
      client: 'Eve Martin',
      produit: 'Tapis',
      quantite: 1,
      statut: 'En attente',
      statusColor: 'text-red-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD032',
      client: 'Frank Dupont',
      produit: 'Rideaux',
      quantite: 1,
      statut: 'Livré',
      statusColor: 'text-green-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD033',
      client: 'Grace Lefevre',
      produit: 'Coussins',
      quantite: 1,
      statut: 'En cours',
      statusColor: 'text-yellow-500',
      action: 'Voir Détails',
    },
    {
      id: 'CMD034',
      client: 'Hank Bernard',
      produit: 'Cadre Photo',
      quantite: 1,
      statut: 'Expédié',
      statusColor: 'text-blue-500',
      action: 'Voir Détails',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ShowDetail() {
    const dialogRef = this.dialog.open<DetailCommandeComponent>(DetailCommandeComponent, {
      width: '500px',
    });
    dialogRef.componentInstance.detailCommande.subscribe((res) => {
      dialogRef.close();
    });
  }

  ShowClient() {
    const dialogRef = this.dialog.open<DetailClientComponent>(DetailClientComponent, {
      width: '500px',
    });
    dialogRef.componentInstance.detailClient.subscribe((res) => {
      dialogRef.close();
    });
  }
}
