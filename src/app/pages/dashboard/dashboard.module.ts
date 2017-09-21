import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRouting } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
