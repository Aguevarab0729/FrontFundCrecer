import { Component } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(){
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

  }
}
