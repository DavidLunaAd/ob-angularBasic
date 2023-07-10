import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  login(email: string, passwords: string): Observable<any>{

    let body = {
      email: email,
      password: passwords
    }
    return this.http.post('https://reqres.in/api/login', body);

  }
}
