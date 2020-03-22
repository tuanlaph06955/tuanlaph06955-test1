import { Component, OnInit } from "@angular/core";
import { data } from "../MockProduct";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {

  selected: Product;
  products: Product[];

  constructor(
    private productsService: ProductService,
    public activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    this.getProduct();
  }
  

  removeProduct(id) {
    let i = 0;
    this.products.map(x => {
      if (x.id === id) {
        this.products.splice(i, 1);
      }
      i++;
    });
  }

  getProduct() {
    return (this.products = this.productsService.getProduct());
  }
  Detail(product) {
    return (this.selected = this.productsService.Detail(product));
  }
  Update(product) {
    return (this.selected = this.productsService.Detail(product));
  }
}
