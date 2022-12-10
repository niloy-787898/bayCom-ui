import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlCustomPipe} from './safe-html.pipe';


@NgModule({
  declarations: [
    SafeHtmlCustomPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlCustomPipe,
  ]
})
export class PipesModule {
}
