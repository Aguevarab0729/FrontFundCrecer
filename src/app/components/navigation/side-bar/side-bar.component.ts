import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  ngOnInit(): void {
    this.burguer() 
  }

  burguer(){
  const btn =  document.querySelector('#menu-btn');
  const menu = document.querySelector('#sidemenu');
  btn?.addEventListener('click', i =>{
    menu?.classList.toggle("menu-expanded");
    menu?.classList.toggle("menu-collapsed")

    document.querySelector('body')?.classList.toggle('body-collapsed');
    
  });
  }
  
}


