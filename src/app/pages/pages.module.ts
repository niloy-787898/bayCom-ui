import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PipesModule} from '../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { NavModule } from 'src/app/shared/lazy/nav/nav.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    SharedModule,
    PipesModule,
    FormsModule,
    NavModule
  ]
})
export class PagesModule {
}
