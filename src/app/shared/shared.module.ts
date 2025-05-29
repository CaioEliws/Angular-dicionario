import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ModalEditComponent } from './components/modal-edit-dicionario/modal-edit.component';
import { ModalEditPalavraComponent } from './components/modal-edit-palavra/modal-edit-palavra.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IconButtonComponent,
    ModalEditComponent,
    ModalEditPalavraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IconButtonComponent,
    ModalEditComponent,
    ModalEditPalavraComponent
  ]
})
export class SharedModule {}