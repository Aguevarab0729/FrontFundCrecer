import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AssistanceInformationService } from 'src/app/services/path-services/assistance-information.service';
import { BasicInfomationService } from 'src/app/services/path-services/basic-infomation.service';
import { BirthInformationService } from 'src/app/services/path-services/birth-information.service';
import { DisabilityInformationService } from 'src/app/services/path-services/disability-information.service';
import { GuardianInformationService } from 'src/app/services/path-services/guardian-information.service';
import { HealthInformationService } from 'src/app/services/path-services/health-information.service';
import { ParentsInformationService } from 'src/app/services/path-services/parents-information.service';
import { ResidenceInformationService } from 'src/app/services/path-services/residence-information.service';
import { SocialInformationService } from 'src/app/services/path-services/social-information.service';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input() beneficiary: any;
  
  editMode = true;
  basicinfoForm: FormGroup;
  birthInfoForm: FormGroup;
  socialinfoForm: FormGroup;
  healthInfoForm: FormGroup;
  residencyInfoForm: FormGroup;
  assistanceForm: FormGroup;
  parentsForm: FormGroup;
  guardianForm: FormGroup;
  disabilityForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private basicInformationService: BasicInfomationService,
              private socialInformationService: SocialInformationService,
              private healthInformationService: HealthInformationService,
              private birthInformationService: BirthInformationService,
              private residenceInformationService: ResidenceInformationService,
              private assistanceInformationService: AssistanceInformationService,
              private parentsInformationService: ParentsInformationService,
              private guardianInformationService: GuardianInformationService,
              private disabilityInformationService: DisabilityInformationService, 

             ) {
    this.basicinfoForm = this.fb.group({
      numDoc: [''],
      documentType: [''],
      firstName: [''],
      secondName: [''],
      firstLastName: [''],
      secondLastName: [''],
      gender: [''],
      unityName: [''],
      duoName: [''],
      teachers: [''],
      joinDate: [''],
      curState: [''],
      exitDate: [''],
      reasonForExit: [''],
      otherExitReason: [''],
      enterBy: [''],
    });


    this.birthInfoForm = this.fb.group({
      birthCountry: [''],
      birthDepartment: [''],
      birthMunicipality: [''],
      birthDate: [''],
    });

    this.healthInfoForm = this.fb.group({
      cefalicProfile: [''],
      eps: [''],
      exclusiveBreastfeedingDuration: [0],
      exclusivelyBreastfeeding: [false],
      gestationWeeks: [0],
      gestationalAgeAtBirth: [0],
      growthDevelopmentControlsReceived: [''],
      hasGrowthAndDevelopmentCard: [false],
      hasVaccinationCard: [false],
      heightAtBirth: [0],
      prematurenessBackground: [false],
      regime: [''],
      ticketNumber: [''],
      totalBreastfeedingDuration: [0],
      under40Weeks: [''],
      vaccinationCardUpToDate: [false],
      vaccinationVerificationDate: [''],
      weightAtBirth: [0],
      
    });


    this.residencyInfoForm = this.fb.group({
      countryOfResidence: [''],
      residenceDepartment: [''],
      locationZone: [''],
      headerType: [''],
      localityName: [''],
      neighborhood: [''],
      foreignZoneName: [''],
      address: [''],
      primaryPhone: [''],
      secondaryPhone: [''],
      householdStratum: [0],
    });


    this.socialinfoForm = this.fb.group({
      groupEthnicity: [''],
      beneficiarySisbenized: [false],
      sisbenScore: [''],
      belongsToFamiliesInAction: [false],
      directlyAffectedByArmedConflict: [false],
      focusingCriteria: [''],
      justificationDocumentExists: [false],
    });

    
    this.assistanceForm = this.fb.group({
      requiresAssistance: [false],
      requiresTechSupport: [false],
      hasTechSupport: [false],
      requiresTherapy: [false],
      receivesTherapy: [false],
      hasInterdictionProcess: [false]
    });

    this.parentsForm = this.fb.group({
      fatherDocumentType: [''],
      fatherDocumentNumber: [''],
      fatherFirstName: [''],
      fatherSecondName: [''],
      fatherFirstLastname: [''],
      fatherSecondLastname: [''],
      fatherBirthdate: [null],
      fatherBirthCountry: [''],
      fatherBirthDepartment: [''],
      fatherBirthCity: [''],
      motherDocumentType: [''],
      motherDocumentNumber: [''],
      motherFirstName: [''],
      motherSecondName: [''],
      motherFirstLastname: [''],
      motherSecondLastname: [''],
      motherBirthdate: [''],
      motherBirthCountry: [''],
      motherBirthDepartment: [''],
      motherBirthCity: ['']
    });

    this.guardianForm = this.fb.group({
      guardianPersonType: [''],
      guardianDocumentType: [''],
      guardianDocumentNumber: [''],
      guardianFirstName: [''],
      guardianSecondName: [''],
      guardianFirstLastName: [''],
      guardianSecondLastName: [''],
      guardianBirthCountry: [''],
      guardianBirthDepartment: [''],
      guardianBirthCity: ['']
    });

    this.disabilityForm = this.fb.group({
      disability: [false],
      certifiedDisability: [false],
      entityCertifiesDisability: [''],
      disabilityCategory: [''],
      specifiedDisability: [''],
      disabilityRegistryEnrollment: [false]
    });

   
  }

  ngOnInit() {
    this.basicinfoForm.patchValue({
      numDoc: this.beneficiary.basicinfo.numDoc,
      documentType: this.beneficiary.basicinfo.documentType,
      firstName: this.beneficiary.basicinfo.firstName,
      secondName: this.beneficiary.basicinfo.secondName,
      firstLastName: this.beneficiary.basicinfo.firstLastName,
      secondLastName: this.beneficiary.basicinfo.secondLastName,
      gender: this.beneficiary.basicinfo.gender,
      unityName: this.beneficiary.basicinfo.unityName,
      duoName: this.beneficiary.basicinfo.duoName,
      teachers: this.beneficiary.basicinfo.teachers,
      joinDate: this.beneficiary.basicinfo.joinDate,
      curState: this.beneficiary.basicinfo.curState,
      exitDate: this.beneficiary.basicinfo.exitDate,
      reasonForExit: this.beneficiary.basicinfo.reasonForExit,
      otherExitReason: this.beneficiary.basicinfo.otherExitReason,
      enterBy: this.beneficiary.basicinfo.enterBy
    });

    this.birthInfoForm.patchValue({
      birthCountry: this.beneficiary.birthinformation.birthCountry,
      birthDepartment: this.beneficiary.birthinformation.birthDepartment,
      birthMunicipality: this.beneficiary.birthinformation.birthMunicipality,
      birthDate: this.beneficiary.birthinformation.birthDate
    });

    this.socialinfoForm.patchValue({
      groupEthnicity: this.beneficiary.socialInformation.groupEthnicity,
      beneficiarySisbenized: this.beneficiary.socialInformation.beneficiarySisbenized,
      sisbenScore: this.beneficiary.socialInformation.sisbenScore,
      belongsToFamiliesInAction: this.beneficiary.socialInformation.belongsToFamiliesInAction,
      directlyAffectedByArmedConflict: this.beneficiary.socialInformationdirectlyAffectedByArmedConflict,
      focusingCriteria: this.beneficiary.socialInformation.focusingCriteria,
      justificationDocumentExists: this.beneficiary.socialInformation.justificationDocumentExists,
    });

    this.healthInfoForm.patchValue({
      cefalicProfile: this.beneficiary.healthInfo.cefalicProfile,
      eps: this.beneficiary.healthInfo.eps,
      exclusiveBreastfeedingDuration: this.beneficiary.healthInfo.exclusiveBreastfeedingDuration,
      exclusivelyBreastfeeding: this.beneficiary.healthInfo.exclusivelyBreastfeeding,
      gestationWeeks: this.beneficiary.healthInfo.gestationWeeks,
      gestationalAgeAtBirth: this.beneficiary.healthInfo.gestationalAgeAtBirth,
      growthDevelopmentControlsReceived: this.beneficiary.healthInfo.growthDevelopmentControlsReceived,
      hasGrowthAndDevelopmentCard: this.beneficiary.healthInfo.hasGrowthAndDevelopmentCard,
      hasVaccinationCard: this.beneficiary.healthInfo.hasVaccinationCard,
      heightAtBirth: this.beneficiary.healthInfo.heightAtBirth,
      prematurenessBackground: this.beneficiary.healthInfo.prematurenessBackground,
      regime: this.beneficiary.healthInfo.regime,
      ticketNumber: this.beneficiary.healthInfo.ticketNumber,
      totalBreastfeedingDuration: this.beneficiary.healthInfo.totalBreastfeedingDuration,
      under40Weeks: this.beneficiary.healthInfo.under40Weeks,
      vaccinationCardUpToDate: this.beneficiary.healthInfo.vaccinationCardUpToDate,
      vaccinationVerificationDate: this.beneficiary.healthInfo.vaccinationVerificationDate,
      weightAtBirth: this.beneficiary.healthInfo.weightAtBirth
    });
    console.log('Beneficiary:', this.beneficiary);
    
    
    if (this.beneficiary.residencyInformation) {
      this.residencyInfoForm.patchValue({
        countryOfResidence: this.beneficiary.residencyInformation.countryOfResidence,
        residenceDepartment: this.beneficiary.residencyInformation.residenceDepartment,
        locationZone: this.beneficiary.residencyInformation.locationZone,
        headerType: this.beneficiary.residencyInformation.headerType,
        localityName: this.beneficiary.residencyInformation.localityName,
        neighborhood: this.beneficiary.residencyInformation.neighborhood,
        foreignZoneName: this.beneficiary.residencyInformation.foreignZoneName,
        address: this.beneficiary.residencyInformation.address,
        primaryPhone: this.beneficiary.residencyInformation.primaryPhone,
        secondaryPhone: this.beneficiary.residencyInformation.secondaryPhone,
        householdStratum: this.beneficiary.residencyInformation.householdStratum
      });
    } else {
      console.log("El objeto 'residencyInformation' no está definido.");
      console.log('Location Zone:', this.beneficiary.residencyInformaion.locationZone);
    }

    this.assistanceForm.patchValue({
      requiresAssistance: this.beneficiary.assistanceInformation.requiresAssistance,
      requiresTechSupport: this.beneficiary.assistanceInformation.requiresTechSupport,
      hasTechSupport: this.beneficiary.assistanceInformation.hasTechSupport,
      requiresTherapy: this.beneficiary.assistanceInformation.requiresTherapy,
      receivesTherapy: this.beneficiary.assistanceInformation.receivesTherapy,
      hasInterdictionProcess: this.beneficiary.assistanceInformation.hasInterdictionProcess
    });

    this.parentsForm.patchValue({
      fatherDocumentType: this.beneficiary.parent.fatherDocumentType,
      fatherDocumentNumber: this.beneficiary.parent.fatherDocumentNumber,
      fatherFirstName: this.beneficiary.parent.fatherFirstName,
      fatherSecondName: this.beneficiary.parent.fatherSecondName,
      fatherFirstLastname: this.beneficiary.parent.fatherFirstLastname,
      fatherSecondLastname: this.beneficiary.parent.fatherSecondLastname,
      fatherBirthdate: this.beneficiary.parent.fatherBirthdate,
      fatherBirthCountry: this.beneficiary.parent.fatherBirthCountry,
      fatherBirthDepartment: this.beneficiary.parent.fatherBirthDepartment,
      fatherBirthCity: this.beneficiary.parent.fatherBirthCity,
      motherDocumentType: this.beneficiary.parent.motherDocumentType,
      motherDocumentNumber: this.beneficiary.parent.motherDocumentNumber,
      motherFirstName: this.beneficiary.parent.motherFirstName,
      motherSecondName: this.beneficiary.parent.motherSecondName,
      motherFirstLastname: this.beneficiary.parent.motherFirstLastname,
      motherSecondLastname: this.beneficiary.parent.motherSecondLastname,
      motherBirthdate: this.beneficiary.parent.motherBirthdate,
      motherBirthCountry: this.beneficiary.parent.motherBirthCountry,
      motherBirthDepartment: this.beneficiary.parent.motherBirthDepartment,
      motherBirthCity: this.beneficiary.parent.motherBirthCity,
    });

    this.guardianForm.patchValue({
      guardianPersonType: this.beneficiary.guardianInfo.guardianPersonType,
      guardianDocumentType: this.beneficiary.guardianInfo.guardianDocumentType,
      guardianDocumentNumber: this.beneficiary.guardianInfo.guardianDocumentNumber,
      guardianFirstName: this.beneficiary.guardianInfo.guardianFirstName,
      guardianSecondName: this.beneficiary.guardianInfo.guaridanSecondName,
      guardianFirstLastName: this.beneficiary.guardianInfo.guardianFirstLastName,
      guardianSecondLastName: this.beneficiary.guardianInfo.guardianSecondLastName,
      guardianBirthCountry: this.beneficiary.guardianInfo.guaridaBirthCountry,
      guardianBirthDepartment: this.beneficiary.guardianInfo.guardianBirthDepartment,
      guardianBirthCity: this.beneficiary.guardianInfo.guardianBirthCity
    });
    console.log(this.beneficiary.guardianInfo.guardianPersonType);

    this.disabilityForm.patchValue({
      disability: this.beneficiary.disabilityInfo.disability,
      certifiedDisability: this.beneficiary.disabilityInfo.certifiedDisability,
      entityCertifiesDisability: this.beneficiary.disabilityInfo.entityCertifiesDisability,
      disabilityCategory: this.beneficiary.disabilityInfo.disabilityCategory,
      specifiedDisability: this.beneficiary.disabilityInfo.specifiedDisability,
      disabilityRegistryEnrollment: this.beneficiary.disabilityInfo.disabilityRegistryEnrollment
    });

    
}

calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const ageInMs = Date.now() - birth.getTime();
  const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365.25);
  return ageInYears;
}

updateDataBeneficiary() {
    const beneficiaryData = this.basicinfoForm.value;
    const numDoc = this.beneficiary.basicinfo.numDoc; // Obtenemos el valor de numDoc del objeto beneficiary
  
    this.basicInformationService.updateBeneficiary(numDoc, beneficiaryData).subscribe(
      response => console.log(response),
      
      error => console.error(error)
      
    );
    console.log(beneficiaryData)
    this.router.navigate(['/main'])
}

updateBirthDataBeneficiary() {
  const beneficiaryData = this.birthInfoForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.birthInformationService.updateBeneficiaryBirth(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

  

  updateDataSocBeneficiary() {
    const beneficiaryData = this.socialinfoForm.value;
    const numDoc = this.beneficiary.basicinfo.numDoc;
  
    this.socialInformationService.updateBeneficiarySocial(numDoc, beneficiaryData).subscribe(
      
      response => console.log(response),
      error => console.error(error)
    );
    alert('Datos actualizados correctamente')
    console.log(beneficiaryData);
}

updateHealthDataBeneficiary() {
  const beneficiaryData = this.healthInfoForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.healthInformationService.updateBeneficiaryHealth(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

updateResidenceDataBeneficiary() {
  const beneficiaryData = this.residencyInfoForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.residenceInformationService.updateBeneficiaryResidency(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

updateAssistanceDataBeneficiary() {
  const beneficiaryData = this.assistanceForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.assistanceInformationService.updateAssistanceBeneficiary(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

updateParentsDataBeneficiary() {
  const beneficiaryData = this.parentsForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.parentsInformationService.updateBeneficiaryParents(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

updateGuardianDataBeneficiary() {
  const beneficiaryData = this.guardianForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.guardianInformationService.updateBeneficiaryGuardian(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  alert('Datos actualizados correctamente')
  console.log(beneficiaryData);
}

updateDisabilityDataBeneficiary() {
  const beneficiaryData = this.disabilityForm.value;
  const numDoc = this.beneficiary.basicinfo.numDoc;

  this.disabilityInformationService.updateBeneficiaryDisability(numDoc, beneficiaryData).subscribe(
    
    response => console.log(response),
    error => console.error(error)
  );
  this.toastr.success(`Los datos fueron actualizados con exito`, 'Datos Actualziados');
  console.log(beneficiaryData);
}





 
  
}
