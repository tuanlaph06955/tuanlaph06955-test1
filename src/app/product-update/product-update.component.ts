import { Component, OnInit } from "@angular/core";
import { data } from "../MockProduct";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product:Product[] = [];

  constructor(
  public productService : ProductService,
  public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getIDProductFromUrl();
  }
  getIDProductFromUrl(){
    this.activatedRoute.params.subscribe(data => {
      let id = data.id;
      console.log(data.name);
      this.product = this.productService.getProductByID(id);
    })
  }

  
}