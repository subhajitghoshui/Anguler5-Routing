import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  routeHome() {
    this.router.navigate(['home']);
  }
  routeAbout() {
    this.router.navigate(['about']);
  }
  routeContact() {
    this.router.navigate(['contact']);
  }

  ngOnInit() {
  }

}
