import { AbstractControl, ValidationErrors } from "@angular/forms";

export function strongPassword(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 6 ? null : { weakPassword: true }
}