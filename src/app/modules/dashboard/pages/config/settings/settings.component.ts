import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { language } from 'src/app/core/constants/language';
import { themeColors, themeMode } from 'src/app/core/constants/theme';
import { HeaderInfo } from 'src/app/core/interface/header-global';
import { ThemeService } from 'src/app/core/services/theme.service';
import { AvatarTextComponent } from 'src/app/shared/components/avatar-text/avatar-text.component';
import { DivideComponent } from 'src/app/shared/components/divide/divide.component';
import { GlobalHeaderComponent } from 'src/app/shared/components/global-header/global-header.component';
import { ProfileContentLoadingComponent } from 'src/app/shared/components/profile-content-loading/profile-content-loading.component';
import { CheckPassComponent } from '../../../modal/check-pass/check-pass.component';
import { MessageResult } from 'src/app/core/interface/message.result.interface';
import { User } from 'src/app/core/interface/user/user.interface';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    GlobalHeaderComponent,
    DivideComponent,
    ProfileContentLoadingComponent,
    AngularSvgIconModule,
    AlertComponent,
    LoadingComponent,
    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  dataInfo: HeaderInfo = {
    title: 'Paramètre',
    subtitle: 'Configuration',
  };

  dataUser: User | null = null;
  resultat: MessageResult | null = null;
  imageUser: string | null = 'assets/avatars/user.png';
  isLoading: boolean = false;
  isLoadingTraitement: boolean = false;
  isEdit: boolean = false;
  isEditPassword: boolean = false;
  newPassword: string = '';
  confirmNewPassword: string = '';
  public themeColors = themeColors;
  public themeMode = themeMode;
  public languages = language;
  userForm!: FormGroup;
  selectedFiles: File[] = [];
  previewImages: string[] = [];
  isDragging = false;
  current: string = localStorage.getItem('language') || 'fr';

  constructor(public themeService: ThemeService, private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  switchLanguage(lang: string) {
    this.current = lang;
    localStorage.setItem('language', lang);
  }

  initForm() {
    if (this.dataUser) {
      this.userForm = this.fb.group({
        name: [
          {
            value: this.dataUser.name,
            disabled: !this.isEdit,
          },
          [Validators.required, Validators.minLength(2)],
        ],
        firstname: [
          {
            value: this.dataUser.firstname,
            disabled: !this.isEdit,
          },
          [Validators.required, Validators.minLength(2)],
        ],
        phone: [
          {
            value: this.dataUser.phone,
            disabled: !this.isEdit,
          },
          [Validators.required],
        ],
        email: [
          {
            value: this.dataUser.email,
            disabled: !this.isEdit,
          },
          [Validators.required, Validators.email],
        ],
        genre: [
          {
            value: this.dataUser.genre,
            disabled: !this.isEdit,
          },
          Validators.required,
        ],
        adress: [
          {
            value: this.dataUser.adress,
            disabled: !this.isEdit,
          },
          [Validators.required, Validators.minLength(5)],
        ],
      });
    }
  }

  accountEdit() {
    this.isEdit = !this.isEdit;
    this.initForm();
  }

  accountEditConfirm() {}

  passwordConfirm() {
    if (this.newPassword !== '' && this.newPassword === this.confirmNewPassword) {
      if (this.passwordValidator(this.newPassword)) {
        const dialogRef = this.dialog.open(CheckPassComponent, {
          width: '400px',
        });
        dialogRef.componentInstance.resultCheck.subscribe((result) => {
          if (result) {
            this.updatePassword();
          } else {
            // this.setMessage(this.translate.instant('SETTING.PASS_ERR_1'), 'error');
            this.passwordEdit();
          }
          dialogRef.close();
        });
      } else {
        // this.setMessage(this.translate.instant('SETTING.PASS_ERR_2'), 'error');
      }
    } else {
      // this.setMessage(this.translate.instant('SETTING.PASS_ERR_3'), 'error');
    }
  }

  updatePassword() {
    if (this.newPassword !== '' && this.newPassword === this.confirmNewPassword) {
      if (this.passwordValidator(this.newPassword)) {
        this.isLoadingTraitement = true;
      } else {
        // this.setMessage(this.translate.instant('SETTING.PASS_ERR_2'), 'error');
      }
    } else {
      // this.setMessage(this.translate.instant('SETTING.PASS_ERR_3'), 'error');
    }
  }

  passwordValidator(password: string): boolean {
    if (password.length < 8) return false;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasLetter && hasDigit;
  }

  login(login: string, password: string) {
    const data = { login, password, remember: false };
  }

  passwordEdit() {
    this.isEditPassword = !this.isEditPassword;
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.selectedFiles = [];
    this.previewImages = [];
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      const files = Array.from(event.dataTransfer.files);
      this.handleFiles(files);
    }
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = [];
    this.previewImages = [];
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      this.handleFiles(files);
    }
  }

  handleFiles(files: File[]): void {
    this.selectedFiles.push(...files);
    this.previewImages.push(...files.map((file) => URL.createObjectURL(file)));
  }

  onSubmitImage(event: any) {
    event.preventDefault();
    if (!this.selectedFiles.length) {
      // this.setMessage(this.translate.instant('SETTING.IMAGE_SELECT'), 'blue');
      return;
    }
    this.isLoadingTraitement = true;
  }

  removeImage(image: string): void {
    const index = this.previewImages.indexOf(image);
    if (index > -1) {
      this.previewImages.splice(index, 1);
      this.selectedFiles.splice(index, 1);
    }
  }

  setMessage(message: string, status: 'success' | 'error' | 'blue') {
    this.resultat = { content: message, status };
    setTimeout(() => {
      this.resultat = null;
    }, 3000);
  }
}
