import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, GlobalHeaderComponent, DivideComponent, TableContentComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  dataInfo: HeaderInfo = {
    title: 'Produits',
    subtitle: 'Gestion',
  };

  tableHeaders = ['Name', 'Time Left', 'View', 'Title', 'View', 'Reel Image'];

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
}
