import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children:[
      {path:"", component:DashboardComponent},
      {path: "customer",loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule)},
      {path: "order",loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule)},
      {path: "products",loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule)},
      {path: "dashboard",loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule)}
    ]
  },
  {path:"", component: HomeComponent},
  {path:"basket", loadChildren:() => import("./ui/components/basket/basket.module").then(module => module.BasketModule)},
  {path:"products", loadChildren:() => import("./ui/components/products/products.module").then(module => module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
