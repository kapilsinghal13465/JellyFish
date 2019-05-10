import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserAuthticated = false;
  constructor() {}

  ngOnInit() {
    // this.isUserAuthticated = this.authService.getIsAuth();
    // this.authListnerSubs = this.authService.getAuthStatusListner().subscribe( isAuthticated => {
    //   this.isUserAuthticated = isAuthticated;
    // });
  }

  ngOnDestroy() {
    // this.authListnerSubs.unsubscribe();
  }

  onLogOut() {
    // this.authService.logOut();
  }
}
