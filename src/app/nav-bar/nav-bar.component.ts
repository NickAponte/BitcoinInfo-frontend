import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName = "";

  constructor() {
    this.userName = window.localStorage['userName'];
   }

  ngOnInit(): void {
    this.userName = window.localStorage['userName'];
  }
  public logout(){
          localStorage.removeItem("userName");
          localStorage.removeItem('userID');
          window.location.pathname = ('/signin')
  }
  public isUserSignedIn(){
    this.userName = window.localStorage['userName'];
    return ( window.localStorage.getItem('userName') == null ? false : true );
  }

}
