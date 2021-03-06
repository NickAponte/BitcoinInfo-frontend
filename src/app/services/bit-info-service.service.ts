import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable,of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BitInfoServiceService {
  private fetchQuestionsURL = environment.bitInfoDBHost + '/questions';  
  private fetchUsersURL = environment.bitInfoDBHost + '/users';
  

  constructor( private http: HttpClient) { }
  public fetchUserById(userId : string) : Observable<any> {
    return this.http.get<any>(this.fetchUsersURL + "/" + userId)
    .pipe(
      catchError((operation, result) => {
          return of(false);
      })// catchError
    );
  }

  public fetchQuestions() : Observable<any>  {
    console.log("in getQuestions");
    
    return this.http.get<any>(this.fetchQuestionsURL)
      .pipe(
        catchError((operation, result) => {
            return of(false);
        })// catchError
      );
   
  }//getQuestions
  
  public signIn(userName : string, password : string) : Observable<any> {
    

    
    return this.http.post<any>(environment.bitInfoDBHost + '/users/signin', 
    { 
      userName: userName,
      password : password
    })
    .pipe(
      catchError((operation, result) => {
        return of(false);
      })// catchError
    )//pipe
    
  }
  public signUp(userName : string, password : string) : Observable<any> {
    return this.http.post<any>(environment.bitInfoDBHost + '/users/signup', 
    { 
      userName: userName,
      password : password
    })
    .pipe(
      catchError((operation, result) => {
        return of(false);
      })// catchError
    )//pipe
  }
  // localStorage.getItem('userName')
  public postQuestion(newQuestion : string) : Observable<any> {
    if( window.localStorage.getItem('userName') == null ) {
      window.location.pathname = ('/signin');
      return of(false);
    } else{    
    
        return this.http.post<any>(environment.bitInfoDBHost + '/questions', 
        { 
          question: newQuestion,
          user : window.localStorage["userID"]
        })
        .pipe(
          catchError((operation, result) => {
            return of(false);
          })// catchError
        )//pipe 
    }  
      
  } //postQuestion

  public postAnswer(newAnswer : string, question : string) : Observable<any> {
    if( window.localStorage.getItem('userName') == null ) {
      window.location.pathname = ('/signin');
      return of(false);
    } else{    
    
        return this.http.post<any>(environment.bitInfoDBHost + '/answers', 
        { 
          question: question ,
          answer: newAnswer,
          user : window.localStorage["userID"],
          userName : window.localStorage["userName"],   // <----- This is causing the bug 
        })
        .pipe(
          catchError((operation, result) => {
            console.log("Error in bit-info-service" + result)
            return of(false);
          })// catchError
        )//pipe 
    }  
      
  } //postQuestion
  callNewsApi() {
    // const headers = new HttpHeaders()
    //     .set('cache-control', 'no-cache')
    //     .set('content-type', 'application/json')
    //     .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');
    
    let url = "https://newsapi.org/v2/everything?q=Bitcoin&from=2021-04-23&sortBy=popularity&apiKey=" + environment.newsApiKey
    return this.http.get<any>(url)
      .pipe(
        catchError((operation, result) => {
            return of(false);
        })// catchError
      );
}       
  /*
  public saveQuestion(question : String, userName : String) : Observable<any> {
    //return this.http.put
  }//saveQuestion
  */

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}//handleError
  
}
