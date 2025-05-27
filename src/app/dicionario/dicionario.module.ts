import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicionarioRoutingModule } from './dicionario-routing.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    DicionarioRoutingModule,
    SharedModule
  ]
})
export class DicionarioModule { }
