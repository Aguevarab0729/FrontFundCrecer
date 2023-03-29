import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

//  Interface de form basicInformation
import { BasicInformation } from 'src/app/interfaces/form/basic-information';


import { createValidator } from '../../validators/validator-creator';
import { required, minLength, length } from '../../validators/validators';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent {

  basicInformationForm = this.formBuilder.group({
    numDoc: [''],
    curState: [''],
    joinDate: [''],
    exitDate: [''],
    enterBy: [''],
    reasonForExit: [''],
    otherExitReason: [''],
    unityName: [''],
    duoName: [''],
    teachers: this.formBuilder.array([]),
    documentType: [''],
    firstName: [''],
    secondName: [''],
    firstLastName: [''],
    secondLastName: [''],
    gender: [''],
  });

  labels = {
    numDoc: 'Número de documento',
    curState: 'Estado actual',
    joinDate: 'Fecha de ingreso',
    exitDate: 'Fecha de salida',
    enterBy: 'Ingresado por',
    reasonForExit: 'Motivo de salida',
    otherExitReason: 'Otro motivo de salida',
    unityName: 'Nombre de la unidad',
    duoName: 'Nombre del dúo',
    teachers: 'Profesores',
    documentType: 'Tipo de documento',
    firstName: 'Primer nombre',
    secondName: 'Segundo nombre',
    firstLastName: 'Primer apellido',
    secondLastName: 'Segundo apellido',
    gender: 'Género'
  };

  formValidator = createValidator<BasicInformation>(this.basicInformationForm, {
    numDoc: [ required() ],
    curState: [ required() ],
    joinDate: [ required() ],
    exitDate: [ required() ],
    enterBy: [ required() ],
    reasonForExit: [],
    otherExitReason: [],
    unityName: [ required(), minLength(3)],
    duoName: [ required(), minLength(3) ],
    teachers: [
      required(),
      {
        message: "No puede agregar mas de 4 profesores"
      },
      value => {
        if (new Set(value).size !== value.length) {
          return { "teacher-unique": "El nombre de profesor debe ser diferente!" };
        }
        return null;
      },
      {
        each: [required(), length(2, 20)]
      }
    ],
    documentType: [ required() ],
    firstName: [ required(), minLength(3)],
    secondName: [],
    firstLastName: [ required(), minLength(4) ],
    secondLastName: [ required(), minLength(4) ],
    gender: [ required() ]
  });

  constructor(private formBuilder: FormBuilder){};

  get teachers() {
    return this.basicInformationForm.get("teachers") as FormArray;
  }

  addMember() {
    this.teachers.push(new FormControl(""));
  }

  removeMember(index: number) {
    this.teachers.removeAt(index);
  }

  onSubmit = () => {
    console.warn(this.basicInformationForm.value);
  }
}
