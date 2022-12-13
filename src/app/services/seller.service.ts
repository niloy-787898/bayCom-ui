import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../interfaces/signup';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  userSignUp(data: SignUp) {
    return this.http.post('http://localhost:8000/seller', data);
  }
}
