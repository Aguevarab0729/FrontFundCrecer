/* import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss']
})
export class StartLoginComponent {
  formLogin = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur'}] ,
      password: ['', [Validators.required, Validators.minLength(10)]]
    });

  constructor(private formBuilder: FormBuilder){};

  login(){

  }
  get email(){
    return this.formLogin.get('email');
  }

  get password(){
    return this.formLogin.get('password');
  }
} */

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss'],
  /* providers: [LoginService] */
})
export class StartLoginComponent {
  title = 'Fundación Crecer';
  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
      emailId: ['', Validators.required, Validators.email],
      userPassword: ['', Validators.required, Validators.minLength(10)],
      NgForm
    });
  };

  onSubmit() {
    this.validateForm().then( result => {
      if (result) {
        console.log("Login exitosamente");
      }
      else{
        console.log("failed to login");
      }
    })
  }

  validateForm(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

    })
  }

  resetForm(){
    this.loginForm.reset();
  }
}

/* function createPasswordStrengthValidator(): any | string {
  throw new Error('Function not implemented.');
} */

  //  getters and setters
  /* get email(){
    return this.formLogin.get('email');
  }

  get password(){
    return this.formLogin.get('password');
  }

  get check(){
    return this.formLogin.get('check');
  }

  //  Submit del login form
  sendForm(){
    if(this.formLogin.valid){
      console.table(this.formLogin.value);
      this.formLogin.reset();
    }
  } */



