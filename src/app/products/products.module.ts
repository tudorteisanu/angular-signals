import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/products.reducer';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { FetchProductsEffect } from './store/effects/fetchProducts.effect';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([FetchProductsEffect]),
  ]
})
export class ProductsModule { }
