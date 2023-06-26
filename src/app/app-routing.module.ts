import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/oneProduct/product/product.component';
import { PostComponent } from './pages/post/post/post.component';
import { DataFormComponent } from './pages/dataForm/data-form/data-form.component';
import { PopUpComponent } from './pages/dataForm/pop-up/pop-up.component';
import { ShoppingCarComponent } from './pages/shopping-car/shopping-car.component';
import { ListProductsComponent } from './pages/main/list-products/list-products.component';
const routes: Routes = [
  {
    path: "",
    component: ListProductsComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "form",
    component: DataFormComponent
  },
  {
    path: "popUP",
    component: PopUpComponent
  },
  {
    path: "shoppingCar",
    component: ShoppingCarComponent
  }
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
