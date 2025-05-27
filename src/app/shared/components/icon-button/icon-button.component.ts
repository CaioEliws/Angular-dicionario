import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <button [ngClass]="btnClass">
      <ng-container *ngIf="label">{{ label }}</ng-container>
      <i *ngIf="icon" [class]="icon"></i>
    </button>
  `,
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() btnClass?: string;
}
