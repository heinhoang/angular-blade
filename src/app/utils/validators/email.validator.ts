import { AbstractControl } from '@angular/forms';
import { multilineRegExp } from '../regexHelpers';

export class EmailValidator {
    public static validate(c: AbstractControl) {
        const EMAIL_REGEXP = multilineRegExp([
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/,
            /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ]);
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
