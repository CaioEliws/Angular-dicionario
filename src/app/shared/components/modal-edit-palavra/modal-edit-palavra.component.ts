import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-edit-palavra',
  templateUrl: './modal-edit-palavra.component.html',
  styleUrls: ['./modal-edit-palavra.component.scss']
})
export class ModalEditPalavraComponent {
  constructor(public bsModalRef: BsModalRef) {}
  
    closeModal() {
      this.bsModalRef.hide();
    }
}
