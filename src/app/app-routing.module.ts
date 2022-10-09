import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { VegesComponent } from './admin/veges/veges.component';
import { ShopvegeComponent } from './shopvege/shopvege.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent, canActivate:[AuthGuardService]},
  { path: 'admin/veges', component: VegesComponent, canActivate:[AuthGuardService] },
  { path: 'shop', component:ShopvegeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
];
    
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
