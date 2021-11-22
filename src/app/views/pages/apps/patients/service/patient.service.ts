import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUri: string = 'http://localhost:4000/api/patient';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

    //create patient :)
    createPatient(data:any): Observable<any> {
      let url = `${this.baseUri}/create`;
      return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
    }
  
    //get all patient :)
    getPatients(){
      return this.http.get(`${this.baseUri}`)
    }
  
    //get patient :)
    getPatient(id): Observable<any> {
      let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, {headers: this.headers}).pipe(
          map((res: Response) => {
            return res || {}
          }),
          catchError(this.errorMgmt)
        )
    }

     // Update patient
  updatePatient(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


    // Delete patient
  deletePatient(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  
    
  
  
    //error handling
    errorMgmt(error: HttpErrorResponse){
      let errorMessage = '';
      if (error.error instanceof ErrorEvent){
        //get client-side errors
        errorMessage = error.error.message;
      } else {
        //get server-side errors
        errorMessage = `Error Code: ${error.message}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
  }


