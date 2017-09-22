import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegisterComponent } from './register.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

export const RegisterRouting: ModuleWithProviders = RouterModule.forChild(routes);
