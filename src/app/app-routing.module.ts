import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
//import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [] },
  {path: 'main', component: MainComponent, canActivate: [] },

  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
