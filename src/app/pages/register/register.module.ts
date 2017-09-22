import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterRouting } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRouting
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
