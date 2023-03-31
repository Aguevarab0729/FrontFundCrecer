import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public beneficiary: any = {};

  constructor() { }

  addProperty( propName: string, propValue: any): void {
    this.beneficiary[propName] = propValue;
  }
}
