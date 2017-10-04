import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRouting } from './pages.routing';
import { ThemeModule } from '../theme/theme.module';
import { ContainersModule } from '../containers/containers.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRouting,
    ThemeModule,
    ContainersModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
