import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../shared/components/icon-button/icon-button.component';
import { ModalEditComponent } from './components/modal-edit-dicionario/modal-edit.component';
import { ModalEditPalavraComponent } from './components/modal-edit-palavra/modal-edit-palavra.component';
import { FormsModule } from '@angular/forms';
import { ModalConsultaDefinicaoComponent } from './components/modal-consulta-definicao/modal-consulta-definicao.component';

@NgModule({
  declarations: [
    IconButtonComponent,
    ModalEditComponent,
    ModalEditPalavraComponent,
    ModalConsultaDefinicaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IconButtonComponent,
    ModalEditComponent,
    ModalEditPalavraComponent,
    ModalConsultaDefinicaoComponent
  ]
})
export class SharedModule {}