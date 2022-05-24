import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Tax} from "../models/tax.model";

@Injectable({
  providedIn: 'root'
})
export class TaxesService {
  base_Url = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  getTaxes() : Observable<Tax[]> {
    return this.httpClient
      .get<Tax[]>(this.base_Url + '/all')
      .pipe(catchError((error) => {return throwError(error.json())}));
  }
  getTaxesByYear() : Observable<Tax[]> {
    return this.httpClient
      .get<Tax[]>(this.base_Url + '/byYear')
      .pipe(catchError((error) => {return throwError(error.json())}));
  }

}
