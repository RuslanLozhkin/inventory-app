import { Product } from './../product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
})
export class ProductDepartmentComponent {
  @Input() product: Product;
  constructor() { }

}
