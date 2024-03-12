import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

export const routes: Routes = [
    // {path:"",pathMatch:"full", component:ProductComponent},//mainpage
    // {path:"products",component:ProductComponent},
    // {path:"products/category/:categoryId",component:ProductComponent}
    { path: "", pathMatch: "full", component: ProductComponent },
    { path: "products", component: ProductComponent },
    { path: "products/category", component: ProductComponent },
    { path: "products/category/:categoryID", component: ProductComponent },
    { path: "products/add", component: ProductAddComponent }
];
