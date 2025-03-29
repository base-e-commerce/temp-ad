import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageResult } from 'src/app/core/interface/message.result.interface';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';

@Component({
  selector: 'app-check-pass',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoadingComponent],
  templateUrl: './check-pass.component.html',
  styleUrl: './check-pass.component.scss',
})
export class CheckPassComponent {
  @Output() resultCheck = new EventEmitter<boolean | null>();
  resultat: MessageResult | null = null;
  isLoading: boolean = false;
  currentPassword: string = '';

  constructor() {} // private authService: AuthService,

  onConfirm() {
    if (this.currentPassword == null) {
      // this.setMessage(this.translate.instant('ERROR_PASS'), 'error');
      return;
    }
    this.isLoading = true;
    // this.userService.checkPassword(this.currentPassword).subscribe(
    //   (res) => {
    //     if (res.success) {
    //       console.log(res);
    //       this.setMessage(this.translate.instant('CONFIRMED'), 'success');
    //       this.resultCheck.emit(true);
    //     } else {
    //       this.setMessage(res.message, 'error');
    //     }
    //     this.isLoading = false;
    //   },
    //   (err) => {
    //     const resError = this.authService.errorCheck(err);
    //     this.setMessage(resError, 'error');
    //     this.isLoading = false;
    //   },
    // );
  }

  onCancel() {
    this.resultCheck.emit(null);
  }

  setMessage(message: string, status: 'success' | 'error' | 'blue') {
    this.resultat = { content: message, status };
    setTimeout(() => {
      this.resultat = null;
    }, 3000);
  }
}
