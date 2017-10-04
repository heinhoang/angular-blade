import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import {
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutColumnComponent
} from './layout.component';

const LAYOUT_COMPONENTS = [
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutColumnComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...LAYOUT_COMPONENTS
  ],
  exports: [
    ...LAYOUT_COMPONENTS
  ]
})
export class LayoutModule { }
