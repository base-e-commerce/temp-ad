import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MessageResult } from 'src/app/core/interface/message.result.interface';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() message!: MessageResult;
  isVisible: boolean = false;

  ngOnChanges() {
    if (this.message) {
      this.showAlert();
      this.showSystemNotification();
    }
  }

  showAlert() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

  showSystemNotification() {
    if (!('Notification' in window)) {
      console.warn('Notifications are not supported by this browser.');
      return;
    }

    if (Notification.permission === 'granted') {
      this.createNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          this.createNotification();
        }
      });
    }
  }

  createNotification() {
    const notification = new Notification('Notification', {
      body: this.message.content,
      icon: this.getIconPath(),
    });

    notification.onclick = () => {};
  }

  getStatusClass(): string {
    switch (this.message?.status) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'blue':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  }

  getIconPath(): string {
    switch (this.message?.status) {
      case 'success':
        return './assets/icons/heroicons/outline/check-circle.svg';
      case 'error':
        return './assets/icons/heroicons/outline/exclamation-triangle.svg';
      case 'blue':
        return './assets/icons/heroicons/outline/information-circle.svg';
      default:
        return './assets/icons/heroicons/outline/question-mark-circle.svg';
    }
  }
}
