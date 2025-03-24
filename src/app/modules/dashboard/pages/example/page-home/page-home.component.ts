import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { BilanTextComponent } from 'src/app/shared/components/bilan-text/bilan-text.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule, GlobalHeaderComponent, RouterLink, BilanTextComponent, TableContentComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss',
})
export class PageHomeComponent {
  dataInfo: HeaderInfo = {
    title: 'Title',
    subtitle: 'SubTitle',
  };

  tableHeaders = ['Item', 'Time Left', 'View', 'Title'];

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
