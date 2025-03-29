import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { BilanLoadingComponent } from 'src/app/shared/components/bilan-loading/bilan-loading.component';
import { BilanComponent } from 'src/app/shared/components/bilan/bilan.component';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';

@Component({
  selector: 'app-service-gestion',
  standalone: true,
  imports: [CommonModule, DivideComponent, BilanComponent, BilanLoadingComponent, GlobalHeaderComponent],
  templateUrl: './service-gestion.component.html',
  styleUrl: './service-gestion.component.scss',
})
export class ServiceGestionComponent {
  dataInfo: HeaderInfo = {
    title: 'Services',
    subtitle: 'Gestion',
  };

  resStat = [
    {
      title: 'Title',
      icon: 'assets/icons/heroicons/custom-other/user-group-outline.svg',
      subtitle: 'subtitle',
      color: 'text-primary',
      value: 5,
      url: '/dashboard/products',
    },
    {
      title: 'Title',
      icon: 'assets/icons/heroicons/custom-other/user-group-outline.svg',
      subtitle: 'subtitle',
      color: 'text-primary',
      value: 5,
      url: '/dashboard/products',
    },
  ];
}
