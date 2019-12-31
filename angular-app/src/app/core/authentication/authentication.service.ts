import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    console.log("username:"+username+ " and password:"+password);
    return this.http.post('http://localhost:8084/api/auth/authenticate', {username,password})
  }
}
