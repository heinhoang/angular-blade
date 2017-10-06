import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarFooterComponent
} from './sidebar.component';

const COMPONENTS = [
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarFooterComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SidebarModule { }
