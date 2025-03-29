import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { AvatarTextComponent } from 'src/app/shared/components/avatar-text/avatar-text.component';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { ProfileContentLoadingComponent } from 'src/app/shared/components/profile-content-loading/profile-content-loading.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, GlobalHeaderComponent, DivideComponent, ProfileContentLoadingComponent, AvatarTextComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  dataInfo: HeaderInfo = {
    title: 'Profile',
    subtitle: 'Configuration',
  };
}
