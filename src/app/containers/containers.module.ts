import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../theme/theme.module';
import { FullLayoutComponent } from './layouts';

const CONTAINER_COMPONENTS = [
  FullLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule
  ],
  declarations: [
    ...CONTAINER_COMPONENTS
  ],
  exports: [
    ...CONTAINER_COMPONENTS
  ]
})
export class ContainersModule { }
