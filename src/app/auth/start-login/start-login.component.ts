
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import * as anime from 'animejs';
import anime from 'animejs/lib/anime.es';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss']
})
export class StartLoginComponent implements OnInit{
  formLogin: FormGroup;
  loginForm = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur'}] ,
      password: ['', [Validators.required, Validators.minLength(10)]]
    });

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router){
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
    }


  ngOnInit(): void {
    let current: anime.AnimeInstance;
    $('#email').click((e) => {
      if (current) current.pause();
      current = anime({
      targets: 'path',
      strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart',
      },
      strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart',
      },});});

      $('#password').focus((e) => {
      if (current) current.pause();
      current = anime({
      targets: 'path',
      strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart',
      },
      strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart',
      },
      });
      });

      $('#submit').focus((e) => {
      if (current) current.pause();
      current = anime({
      targets: 'path',
      strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart',
      },
      strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart',
      },
      });
      });
  }
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}

// onSubmit() {
//   this.validateForm().then( result => {
//     if (result) {
//       console.log("Login exitosamente");
//     }
//     else{
//       console.log("No puede iniciar sesión, credenciales erroneas");
//     }
//   })
// }

// validateForm(): Promise<boolean> {
//   return new Promise<boolean>((resolve, reject) => {
//     const email = this.loginForm.get('email')?.value;
//     const password = this.loginForm.get('password')?.value;

//   })
// }

// resetForm(){
//   this.loginForm.reset();
// }
/* import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss'],

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
 */
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



