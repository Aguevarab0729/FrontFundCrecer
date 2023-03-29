import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicInfomationService } from 'src/app/services/path-services/basic-infomation.service';
import { HealthInformationService } from 'src/app/services/path-services/health-information.service';
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
  socialinfoForm: FormGroup;
  healthInfoForm: FormGroup;
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private basicInformationService: BasicInfomationService,
              private socialInformationService: SocialInformationService,
              private healthInformationService: HealthInformationService
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

    this.socialinfoForm = this.fb.group({
      groupEthnicity: [''],
      beneficiarySisbenized: [false],
      sisbenScore: [''],
      belongsToFamiliesInAction: [false],
      directlyAffectedByArmedConflict: [false],
      focusingCriteria: [''],
      justificationDocumentExists: [false],
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
      cefalicProfile: this.beneficiary.healthInfo.cefalicProfil,
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

 
  
}
