import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { AuthGuard } from './common/auth.guard';
import { StartPage } from './startPage';

export const routes: RouterConfig = [
  { path: '',       component:  StartPage },
  { path: 'login',  component: Login },
  { path: 'startPage',  component: StartPage },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: '**',     component: StartPage },
];
