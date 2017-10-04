import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './components/layout/layout.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

const THEME_MODULES = [
  LayoutModule,
  SidebarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...THEME_MODULES
  ],
  exports: [
    ...THEME_MODULES
  ]
})
export class ThemeModule { }
