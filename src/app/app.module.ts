import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { Product } from './Product';
import { data } from './MockProduct';
import { AppRouting } from './app-routing';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouting ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, CategoryComponent, BannerComponent, FooterComponent, ListProductComponent, ProductComponent, ProductManagerComponent, ProductAddComponent, AboutComponent, ServiceComponent, HomepageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
