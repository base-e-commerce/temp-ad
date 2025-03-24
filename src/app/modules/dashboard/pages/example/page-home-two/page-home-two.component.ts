import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';

@Component({
  selector: 'app-page-home-two',
  standalone: true,
  imports: [
    TableContentComponent,
    RouterLink,
    GlobalHeaderComponent,
    DivideComponent,
    CommonModule,
    ProductItemComponent,
  ],
  templateUrl: './page-home-two.component.html',
  styleUrl: './page-home-two.component.scss',
})
export class PageHomeTwoComponent {
  dataInfo: HeaderInfo = {
    title: 'Title',
    subtitle: 'SubTitle',
  };

  tableHeaders = ['Item', 'Time Left', 'View', 'Title', 'View', 'Title'];

  tableData = [
    {
      image:
        'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
      title: 'Title',
      subtitle: 'Subtitle',
      timeLeft: '2h 30m',
      view: 'View Details',
    },
    {
      image:
        'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
      title: 'Another Item',
      subtitle: 'Description',
      timeLeft: '1h 20m',
      view: 'View Details',
    },
  ];
}
