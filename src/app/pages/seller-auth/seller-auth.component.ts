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

  ngOnInit(): void {}
  signUp(data: SignUp): void {

    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
this.router.navigate(['seller-home'])
      }
    })
  }
}
