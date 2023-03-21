import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss']
})
export class StartLoginComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9*')])],
        check: [false, Validators.requiredTrue]
      }
    )
    this.formLogin.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  //  getters and setters
  get email(){
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
  }
}


