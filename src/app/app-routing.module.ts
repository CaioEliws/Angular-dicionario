import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dicionario',
    loadChildren: () => import('./dicionario/dicionario.module').then(m => m.DicionarioModule)
  },
  { path: '', redirectTo: 'dicionario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
