import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from '../../core/db/category.db';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[] = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
