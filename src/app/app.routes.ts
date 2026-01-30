import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Guardadas } from './pages/guardadas/guardadas';
import { Add } from './pages/add/add';
import { Login } from './pages/login/login';

export const routes: Routes = [

      { path: '', component: Principal },
  { path: 'guardadas', component: Guardadas },
  { path: 'add', component: Add },
  { path: 'login', component: Login },
];
