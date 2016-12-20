import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthManager } from "./auth.manager";


export const AppRouters: Routes = [
    { path: 'index' , component: DashboardComponent,canActivate:[AuthManager] },
    { path: 'login' , component: LoginComponent },
    { path: '' , component: LoginComponent },
    { path: '**' , component: LoginComponent }
];

export const AppRoutingProviders: any[] = [

];


export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRouters);