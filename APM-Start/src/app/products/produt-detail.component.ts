import { Component, OnInit } from '@angular/core';

import { IProduct} from './product';

@Component({
  templateUrl: './produt-detail.component.html',
  styleUrls: ['./produt-detail.component.css']
})
export class ProdutDetailComponent implements OnInit {
  pageTitle: string= 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
