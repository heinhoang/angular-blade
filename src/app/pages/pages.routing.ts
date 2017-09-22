import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ]
    }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
