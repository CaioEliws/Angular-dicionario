import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() btnClass?: string;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
