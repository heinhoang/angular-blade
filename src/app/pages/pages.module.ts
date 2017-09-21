import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRouting } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    PagesRouting
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
