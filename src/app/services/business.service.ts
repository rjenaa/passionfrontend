import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../models/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080';

  fetchAllBusiness(): Observable<any>{
    return this.http.get<any>(this.URL+`/business`);
  }

  createBusiness(business: Business): Observable<any>{
    return this.http.post<any>(this.URL+`/business`, business);
  }

  signIn(id1, location1: string): Observable<any>{
    let params = new HttpParams();
    params = params.set('id', id1);
    params = params.set('location', location1);
    return this.http.get<any>(this.URL+`/business/siginin`, {params: params})
  }

  fetchBusinessById(id:number):Observable<any>{
    return this.http.get<any>(this.URL + `/business/${id}`)
  }
}
