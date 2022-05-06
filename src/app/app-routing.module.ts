import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrentistaComponent } from './components/correntista/correntista.component';
import { MovimentacoaoListComponent } from './components/movimentacoao-list/movimentacoao-list.component';
import { MovimentacoaoNewComponent } from './components/movimentacoao-new/movimentacoao-new.component';

const routes: Routes = [
  {path: 'movimentacoes-new', component: MovimentacoaoNewComponent },
  {path: 'movimentacoes', component: MovimentacoaoListComponent },
  {path: '', redirectTo: 'movimentacoes', pathMatch: 'full'},
  { path: 'correntistas', component: CorrentistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
