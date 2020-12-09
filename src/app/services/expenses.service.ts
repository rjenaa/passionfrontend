import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080';

  fetchAllExpenses(): Observable<any>{
    return this.http.get<any>(this.URL+`/business/expenses`);
  }

  createExpenses(Id: number, file: File): Observable<any>{
    const formData :FormData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(this.URL+`/business/${Id}/expenses`, formData);
  }

  
}
