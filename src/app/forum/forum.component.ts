import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {BitInfoServiceService} from '../services/bit-info-service.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  public questions : any;

  constructor( private bitInfoService : BitInfoServiceService) { 
    
  }

  ngOnInit(): void {
    this.fetchQuestions();    

  }//ngOnInit

  private fetchQuestions(){
    this.bitInfoService.fetchQuestions().subscribe( (data: any) => {
      //console.log('data=' + data);
      this.questions = data;
      console.log(this.questions);
    });
  }

  public postQuestion() : void {
    this.bitInfoService.postQuestion().subscribe((data: any) => {
      console.log('data=' + data);
      this.fetchQuestions(); 
    });
     
  }//postQuestion

}
