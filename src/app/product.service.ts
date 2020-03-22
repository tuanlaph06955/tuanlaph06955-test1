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
    let result = null;
    for(var i=0; i<this.products.length; i++){
      if(this.products[i].id == id){
        result = this.products[i];
        break;
      }
    }
    return result;
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

  updateProduct(product :  Product){
    
  }
}
