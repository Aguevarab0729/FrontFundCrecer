import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {

  transform(value: any): any[] {
    let errorsList = [];
    for(let property in value) {
      let propertyErrors = value[property]['errors'];
      for(let error in propertyErrors) {
        errorsList.push(`${propertyErrors[error]['message']}`);
      }
    }
    return errorsList;
  }

}
