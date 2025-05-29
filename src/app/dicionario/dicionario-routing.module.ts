import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { PalavrasComponent } from './pages/palavras/palavras.component';

const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'palavra', component: PalavrasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicionarioRoutingModule { }
