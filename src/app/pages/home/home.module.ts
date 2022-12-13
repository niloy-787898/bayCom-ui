import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CategoryCardOneModule} from '../../shared/lazy/category-card-one/category-card-one.module';





@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CategoryCardOneModule
    ]
})
export class HomeModule { }
