import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementsService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080';

  fetchAllStatements(): Observable<any> {
    return this.http.get<any>(this.URL+`/statements`);
  }

  fetchStatementById(id:number): Observable<any> {
    return this.http.get<any>(this.URL+`/statements/${id}`);
  }

  fetchStatementByAccountId(id:number): Observable<any> {
    return this.http.get<any>(this.URL+`/statements/filter/${id}`);
  }
}
