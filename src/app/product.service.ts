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

  getProductByID(id: number){
    return this.products.find(product => product.id == id);
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

  editProductByID(data: Product) {
    return this.products = this.products.map(product => {
      return product.id === data.id ? data : product;
    });
  }
}
