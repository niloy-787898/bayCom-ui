import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SignUp } from 'src/app/interfaces/signup';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router) {}

  showLogin = false;

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: SignUp): void {

    this.seller.userSignUp(data)
  }
  login(data: SignUp): void {
console.warn(data)
    // this.seller.userSignUp(data)
  }
  openLogin(){
this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
