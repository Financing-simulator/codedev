import { Routes } from '@angular/router';
import { CpfComponent } from './components/cpf/cpf.component';
import { CnpjComponent } from './components/cnpj/cnpj.component';
import { ValidadoresComponent } from './components/validadores/validadores.component';
import { RedeComponent } from './components/rede/rede.component';
import { RegexComponent } from './components/regex/regex.component';
import { QaComponent } from './components/qa/qa.component';
import { EmptyHomeComponent } from './components/empty-home/empty-home.component';




export const routes: Routes = [
  { path: 'cpf', component: CpfComponent },
  { path: 'cnpj', component: CnpjComponent },
  { path: 'validadores', component: ValidadoresComponent },
  { path: 'rede', component: RedeComponent },
  { path: 'regex', component: RegexComponent },
  { path: 'qa', component: QaComponent },
  { path: '', component: EmptyHomeComponent }, 
  { path: '**', redirectTo: '' }
];
