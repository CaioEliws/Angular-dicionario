import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }

  colors = [
  { label: 'Cor de fundo do botão', value: '#007bff' },
  { label: 'Cor da fonte do botão', value: '#ffffff' },
  { label: 'Cor da fonte para títulos', value: '#007bff' },
  { label: 'Cor do ícone', value: '#007bff' }
];
}
