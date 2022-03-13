import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: 'admin', component: DashboardComponent,
    canActivate: [AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
