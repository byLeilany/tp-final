import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private num = 4200;
  private baseUrl = "http://localhost:" + this.num + "/user/login"; //cambiar esto 
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
