import { FormGroup } from '@angular/forms';

export class EqualPasswordsValidator {
    public static validate(password: string, repeatPassword: string) {
        return (fg: FormGroup) => (
            fg.controls && fg.controls[password].value === fg.controls[repeatPassword] ? null : {
                passwordsEqual: {
                    valid: false
                }
            }
        );
    }
}
