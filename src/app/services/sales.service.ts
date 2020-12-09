import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080';

  fetchAllSales(): Observable<any>{
    return this.http.get<any>(this.URL+`/business/sales`);
  }

  createSales(id: number, file:File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append("file",file);
    return this.http.post<any>(this.URL+`/business/${id}/sales`, formData);

  }
}
