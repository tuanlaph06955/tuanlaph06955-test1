import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AboutComponent } from './about/about.coponent';
import { ServiceComponent } from './service/service.coponent';
import { HomepageComponent } from './homepage/homepage.coponent';

const routes: Routes = [
  { path: 'product-add', component:ProductAddComponent  },
  { path: 'product-manager', component:ProductManagerComponent  },
  { path: 'list-product', component:ListProductComponent  },
  { path: 'about', component:ListProductComponent  },
  { path: 'list-product', component:ListProductComponent  },
  { path: 'about', component:AboutComponent  },
  { path: 'service', component:ServiceComponent  },
  { path: 'homepage', component:HomepageComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
