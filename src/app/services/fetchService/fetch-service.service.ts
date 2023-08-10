import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { IUser, IUserByQuery, IRepo } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, body was: `,
      error.error
    );

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>('https://api.github.com/users')
      .pipe(catchError(this.handleError));
  }

  getUsersByQuery(queryString: string): Observable<IUserByQuery> {
    return this.http
      .get<IUserByQuery>(`https://api.github.com/search/users?q=${queryString}`)
      .pipe(catchError(this.handleError));
  }

  getReposByUser(login: string): Observable<IRepo[]> {
    return this.http
      .get<IRepo[]>(`https://api.github.com/users/${login}/repos`)
      .pipe(catchError(this.handleError));
  }
}
