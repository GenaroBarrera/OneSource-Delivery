import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;
  private loginUrl = 'http://localhost:8080/ShopSim/shop/login';
  private requestHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private httpClient: HttpClient) { }

  sendLogin(email: string, password: string): Observable<any> {
    let body = `email=${email}&password=${password}`;
    return this.httpClient.post<any>(this.loginUrl, body, {headers: this.requestHeaders, observe: 'response'});
  }
}
