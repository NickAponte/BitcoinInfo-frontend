import { Component, OnInit } from '@angular/core';
import {BitInfoServiceService} from '../services/bit-info-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // userName : string = "";
  // password : string = "";


  constructor(private bitInfoService : BitInfoServiceService) { }

  ngOnInit(): void {
  }
  // public signUp(){
  //   this.bitInfoService.signUp(this.userName, this.password).subscribe( (data: any) => {
  //     //console.log('data=' + data);  
  //     if(localStorage.getItem('userName')!== null){
  //       localStorage.removeItem("userName") // logs user out if one is logged in
  //     }
  //     window.localStorage['userName'] = data.user.userName    
      
  //   });
  // }//signup
}
