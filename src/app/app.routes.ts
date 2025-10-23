import { Routes } from '@angular/router';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamentos } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos';

export const routes: Routes = [
  { path: '',redirectTo: 'listarPensamento', pathMatch: 'full'},
  { path: 'criarPensamento', component: CriarPensamento },
  { path: 'listarPensamento', component: ListarPensamentos },
];
