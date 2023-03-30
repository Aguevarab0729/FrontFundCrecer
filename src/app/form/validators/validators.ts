import { Validate } from "src/app/interfaces/validations/validator";

export function required<T>(): Validate<T, any> {
  return (value: any) =>
    value == null || value == undefined || value.length === 0
      ? { required: {} }
      : null;
}

export function minLength(minLength: number): Validate<any, string | any[]> {
  return (value: string | any[]) => {
    if (typeof value !== "string" && !("length" in value)) {
      return null;
    }
    return value.length < minLength
      ? {
          minLength: {
            minLength,
            totalLength: value.length
          }
        }
      : null;
  };
}

export function maxLength(maxLength: number): Validate<any, string | any[]> {
  return (value: string | any[]) => {
    if (typeof value !== "string" && !("length" in value)) {
      return null;
    }
    return value.length > maxLength
      ? {
          maxLength: {
            maxLength,
            totalLength: value.length
          }
        }
      : null;
  };
}

export function length(
  minLength: number,
  maxLength: number = minLength
): Validate<any, string | any[]> {
  return (value: string | any[]) => {
    if (typeof value !== "string" && !("length" in value)) {
      return null;
    }
    return value.length < minLength || value.length > maxLength
      ? {
          length: {
            minLength,
            maxLength,
            totalLength: value.length
          }
        }
      : null;
  };
}
