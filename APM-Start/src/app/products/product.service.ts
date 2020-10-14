import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productsURL = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this._productsURL)
      .pipe(
        tap(data => console.log('All:', JSON.stringify(data))),
        catchError(this.handleError)
      );

  }

  private handleError(err: HttpErrorResponse) {
    let message = '';

    if(err.error instanceof ErrorEvent) {
      message = `An error occurred: ${err.error.message}`;
    } else {
      message = `Server error code: ${err.status}, ${err.message}`
    }
    console.error(message);
    return throwError(message);
  }
}
