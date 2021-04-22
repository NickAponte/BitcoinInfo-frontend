import { Component, OnInit } from '@angular/core';
import {BitInfoServiceService} from '../services/bit-info-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userName : string = "";
  password : string = "";

  constructor(private bitInfoService : BitInfoServiceService) { }

  ngOnInit(): void {
  }
  public signIn(){
    this.bitInfoService.signIn(this.userName, this.password).subscribe( (data: any) => {
      //console.log('data=' + data);  
      window.localStorage['userName'] = data.user.userName    
      
    });
  }//signin

}
