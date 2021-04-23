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
  showErrorMessage = false;
  errorMessage = "";

  constructor(private bitInfoService : BitInfoServiceService) { }

  ngOnInit(): void {}
    
  
  // public signIn(){
  //   this.bitInfoService.signIn(this.userName, this.password).subscribe( (data: any) => {
  //     //console.log('data=' + data);  
  //     if(localStorage.getItem('userName')!== null){
  //       localStorage.removeItem("userName") // logs user out if one is logged in
  //     }
  //     window.localStorage['userName'] = data.user.userName    
      
  //   });
  // }//signin

  public signIn(){
    
      this.bitInfoService.signIn(this.userName, this.password).subscribe( (data: any) => {   
        if(localStorage.getItem('userName')!== null){
          localStorage.removeItem("userName");
          localStorage.removeItem('userID');
              }     
        
        window.localStorage['userName'] = data.user.userName  ; 
        window.localStorage['userID'] = data.user._id;     
        this.errorMessage = data;
       if(localStorage.getItem('userName')!== null){
        window.location.pathname = ('/home')
       }          
      },
      err => {
        alert('here')
      });
     
   }//signin
  
}
