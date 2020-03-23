import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { data } from './Mockproduct';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product:Product = null;
  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService
  ) { }

  ngOnInit() {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.getProductByID(id);
    console.log(this.product);
  }

}