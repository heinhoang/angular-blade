import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public form: FormGroup;
  public passwords: FormGroup;
  public email: AbstractControl;
  public name: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public submitted = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      passwords: fb.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
    });

    this.email = this.form.controls['email'];
    this.name = this.form.controls['name'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
