import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../theme/theme.module';
import {
  FullLayoutComponent
} from './layouts';
import { ComponentsModule } from '../components/components.module';

const CONTAINER_COMPONENTS = [
  FullLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
    ComponentsModule
  ],
  declarations: [
    ...CONTAINER_COMPONENTS
  ],
  exports: [
    ...CONTAINER_COMPONENTS
  ]
})
export class ContainersModule { }
