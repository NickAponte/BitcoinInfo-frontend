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
