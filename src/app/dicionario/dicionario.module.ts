import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicionarioRoutingModule } from './dicionario-routing.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { SharedModule } from '../shared/shared.module';
import { PalavrasComponent } from './pages/palavras/palavras.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    PalavrasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DicionarioRoutingModule,
    SharedModule
  ]
})
export class DicionarioModule { }
