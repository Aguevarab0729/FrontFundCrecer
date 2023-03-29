import { ControlMessages, Validate, Validator } from "src/app/interfaces/validations/validator";


export type AnyValidator<T = any, V = any> =
  | Validator<T, V>
  | Validate<T, V>
  | (Validator<T, V> | Validate<T, V>)[];

export type ValidationMessagesWithTemplate = Record<
  string,
  { messageTemplate?: string }
>;

export type ValidationMessages = Record<string, {}>;

export type FormMessages = Record<string, ControlMessages>;

export type ValidatorsByControlKey<T> = {
  [P in keyof T]?: AnyValidator<T, T[P]> | AnyValidator<T, T[P]>[]
};

export type ControlValidators<T> = { [P in keyof T]?: Validator<T, any>[] };
