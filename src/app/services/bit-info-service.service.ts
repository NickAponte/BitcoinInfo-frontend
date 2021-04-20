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
  
  constructor( private http: HttpClient) { }

  public fetchQuestions() : Observable<any>  {
    console.log("in getQuestions");
    
    return this.http.get<any>(this.fetchQuestionsURL)
      .pipe(
        catchError((operation, result) => {
            return of(false);
        })// catchError
      );
   
  }//getQuestions

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
