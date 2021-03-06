import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { data } from './Mockproduct';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  selected:Product;
  products: Product[];

  removeProduct(id){
    return this.products = this.productsService.removeProduct(id);
  }

  getProduct(){

    return this.products = this.productsService.getProduct();
  }
  Detail(product){
    return this.selected = this.productsService.Detail(product);

  }

}