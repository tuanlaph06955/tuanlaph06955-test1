import { Component, OnInit } from "@angular/core";
import { data } from "../MockProduct";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product:Product;
  public editFormPro:FormGroup;
  constructor(
  public productService : ProductService,
  public activatedRoute: ActivatedRoute,
  public formGroup: FormGroup,
  public fromBuilder: FormBuilder,
  public router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = parseInt(param.get('id'));
      this.product = this.productService.getProductByID(id);
    });

    this.editFormPro = this.fromBuilder.group({
      name: '',
      price: '',
      image: '',
      desc: '',
    });
  }

  Submit() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      let data: Product = {
        id: param.get('id'),
        ...this.editFormPro.value
      };
      this.productService.editProductByID(data);
      return this.router.navigate(['/product-manager', 'product.id']);
    });
  }  
}