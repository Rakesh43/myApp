import { FormGroup } from '@angular/forms';

export function matchPassword(value: string, matchValue: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[value];
    const confirmPassword = formGroup.controls[matchValue];

    if (confirmPassword.errors && !confirmPassword.errors.mustWatch) {
      return;
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({mustWatch: true});
    } else {
      confirmPassword.setErrors(null);
    }
  };
}
