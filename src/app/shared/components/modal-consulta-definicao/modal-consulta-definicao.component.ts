import { Component } from '@angular/core';
import { Palavra } from 'src/app/models/dicionario.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-consulta-definicao',
  templateUrl: './modal-consulta-definicao.component.html',
  styleUrls: ['./modal-consulta-definicao.component.scss']
})
export class ModalConsultaDefinicaoComponent {
  palavra!: Palavra;

  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}