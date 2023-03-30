import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headmenu',
  templateUrl: './headmenu.component.html',
  styleUrls: ['./headmenu.component.scss']
})
export class HeadmenuComponent implements OnInit{

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error));
  }

}
