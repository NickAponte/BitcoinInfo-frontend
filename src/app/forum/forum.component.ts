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
  public newQuestion : string = "";
  public questionid : string = "";

  constructor( private bitInfoService : BitInfoServiceService) { 
    
  }

  ngOnInit(): void {
    this.fetchQuestions()

  }//ngOnInit

  private fetchQuestions(){
    this.bitInfoService.fetchQuestions().subscribe( (data: any) => {
      //console.log('data=' + data);
      this.questions = data;      
      this.questions.forEach( question => console.log(question + "; " + question.user));
      
    });
  }
  public postAnswer(questionId : string) : void {
   // alert("questionId=" + questionId);
    let newAnswer = (document.getElementById('newAnswer_' + questionId) as HTMLInputElement).value;    
        
    this.bitInfoService.postAnswer(newAnswer,  questionId ).subscribe((data: any) => {
      console.log(data);
      this.fetchQuestions()
    });
  }




  public postQuestion() : void {
    //console.log("newQuestion=[" + this.newQuestion + "]");
    this.bitInfoService.postQuestion(this.newQuestion).subscribe((data: any) => {
      console.log(data);
      this.fetchQuestions()
    });
     
  }//postQuestion

  public isUserSignedIn(){
    return ( window.localStorage.getItem('userName') == null ? false : true );
  }

}
