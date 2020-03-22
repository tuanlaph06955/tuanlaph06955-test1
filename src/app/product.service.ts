import { Injectable } from '@angular/core';
import { data } from './Mockproduct';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  constructor() { }

  getProduct(){
    return this.products;
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  Detail(product){
    return this.products = product;
  }

  addProduct(product){
    let fakeObj = {id: 11, ...product};
    this.products.push(fakeObj);
    console.log(this.products);
  }
}
