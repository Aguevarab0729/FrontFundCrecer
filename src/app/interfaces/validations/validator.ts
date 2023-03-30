import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { AnyValidator, ValidationMessages } from "src/app/form/validators";

export interface Validator<T, V> {
  validator?: Validate<T, V> | Validate<T, V>[];
  when?: When<T, V>;
  each?: AnyValidator<T, any>;
  message?: string | ((value: V, form: T) => string);
}

export interface Validate<T, V> {
  (value: V, formValue: T, index?: number):
    | ValidationMessages
    | null
    | Observable<ValidationMessages | null>;
}

export interface When<T, V> {
  (value: V, formValue: T): boolean;
}

export interface ControlMessages {
  control: AbstractControl;
  errors: ValidationMessages;
  childrenErrors: ControlMessages[];
  asyncValidators: Observable<ValidationMessages>[];
}
