import { Routes } from '@angular/router';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamentos } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
  { path: '',redirectTo: 'listarPensamento', pathMatch: 'full'},
  { path: 'criarPensamento', component: CriarPensamento },
  { path: 'listarPensamento', component: ListarPensamentos },
  { path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent },
  { path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent },
];
