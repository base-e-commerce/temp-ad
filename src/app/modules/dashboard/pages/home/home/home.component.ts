import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Chart } from 'chart.js';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';

declare var google: any;
interface Order {
  id: number;
  client: string;
  amount: number;
  status: 'Validé' | 'En attente' | 'Annulé';
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GlobalHeaderComponent,
    DivideComponent,
    AngularSvgIconModule,
    TableContentComponent,
    MapComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  dataInfo: HeaderInfo = {
    title: 'Tableau de bord',
    subtitle: 'Accueil',
  };

  totalOrders = 152;
  revenue = 12345.67;
  users = 87;
  products = 45;

  recentOrders: Order[] = [
    { id: 1001, client: 'Dupont', amount: 250, status: 'Validé' },
    { id: 1002, client: 'Durand', amount: 450, status: 'En attente' },
    { id: 1003, client: 'Martin', amount: 125, status: 'Annulé' },
  ];

  tableHeaders = ['Produit', 'Temps Restant', 'Voir', 'Titre', 'Voir', 'Titre'];

  tableData = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyvK9iusXBcBe9fx7rVS3joloIgyf4jDsH7fkjZZ7MvBdIr-lJpaaYbiF-KjvWS3VNcY&usqp=CAU',
      title: 'T-shirt Noir',
      subtitle: 'T-shirt unisexe en coton',
      timeLeft: '2h 30m',
      view: 'Voir les détails',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyvK9iusXBcBe9fx7rVS3joloIgyf4jDsH7fkjZZ7MvBdIr-lJpaaYbiF-KjvWS3VNcY&usqp=CAU',
      title: 'Robe Rouge',
      subtitle: 'Robe élégante pour femme',
      timeLeft: '1h 20m',
      view: 'Voir les détails',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyvK9iusXBcBe9fx7rVS3joloIgyf4jDsH7fkjZZ7MvBdIr-lJpaaYbiF-KjvWS3VNcY&usqp=CAU',
      title: 'Portefeuille en Cuir',
      subtitle: 'Portefeuille en cuir marron',
      timeLeft: '3h 10m',
      view: 'Voir les détails',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyvK9iusXBcBe9fx7rVS3joloIgyf4jDsH7fkjZZ7MvBdIr-lJpaaYbiF-KjvWS3VNcY&usqp=CAU',
      title: 'Baskets Noires',
      subtitle: 'Baskets confortables pour homme',
      timeLeft: '4h 5m',
      view: 'Voir les détails',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyvK9iusXBcBe9fx7rVS3joloIgyf4jDsH7fkjZZ7MvBdIr-lJpaaYbiF-KjvWS3VNcY&usqp=CAU',
      title: 'Mug en Céramique',
      subtitle: 'Mug blanc en céramique',
      timeLeft: '1h 45m',
      view: 'Voir les détails',
    },
  ];

  tableHeadersClient = ['Name', 'Time Left', 'View', 'Title', 'View', 'Reel Image'];

  tableDataClient = [
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

  chartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  salesData = [{ data: [65, 59, 80, 81, 56], label: 'Ventes' }];
  chartOptions = {
    responsive: true,
  };

  ngOnInit() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  constructor() {}

  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Mois', 'Ventes'],
      ['Jan', 1000],
      ['Feb', 1170],
      ['Mar', 660],
      ['Apr', 1030],
    ]);

    const options = {
      title: 'Ventes mensuelles',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Total des ventes',
        minValue: 0,
      },
      vAxis: {
        title: 'Mois',
      },
    };

    const chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
