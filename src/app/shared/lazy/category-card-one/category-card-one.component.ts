import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-card-one',
  templateUrl: './category-card-one.component.html',
  styleUrls: ['./category-card-one.component.scss']
})
export class CategoryCardOneComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
