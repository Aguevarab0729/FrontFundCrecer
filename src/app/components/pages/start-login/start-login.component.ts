import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as anime from 'animejs';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.scss']
})
export class StartLoginComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private router: Router){

      let current: anime.AnimeInstance | null = null;

document.querySelector<HTMLInputElement>('#email')?.addEventListener('focus', (e) => {
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
    },
  });
});

document.querySelector<HTMLInputElement>('#password')?.addEventListener('focus', (e) => {
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

document.querySelector<HTMLInputElement>('#submit')?.addEventListener('focus', (e) => {
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
    };

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


