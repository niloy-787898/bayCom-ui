import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardOneComponent } from './category-card-one.component';



@NgModule({
  declarations: [
    CategoryCardOneComponent
  ],
  exports: [
    CategoryCardOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryCardOneModule { }
