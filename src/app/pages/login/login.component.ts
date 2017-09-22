import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public isSubmited = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  onSubmit(values: Object) {
    this.isSubmited = true;
    if (this.form.valid) {
      //
    }
  }
}
