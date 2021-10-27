import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GeneralUser } from '../models/general-user';

@Injectable({
  providedIn: 'root'
})
export class ReqresUserService {

  baseURL: string = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getUsers(page?: number,perpage?: number)
  {
    debugger
    return this.httpClient.get<GeneralUser>(`${this.baseURL}/api/ReqresUser/GetUsers?page=${page}&perpage=${perpage}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError = (error: any) => {
    let errorMessage = '';
    let errorMessageSnack = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n Error:${error.error}`;
      errorMessageSnack = `Error:${error.error}`;
    }
    console.log(errorMessage);
    return throwError(error);
  }
}
