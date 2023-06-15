import { Component, OnInit, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { errorSelector, isFetchingSelector, productsSelector } from '../../store/products.selectors';
import { ProductInterface } from '../../types/product.interface';
import { BackendError } from 'src/app/shared/types/backendError.interface';
import { fetchProductsAction } from '../../store/actions/fetchProducts.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private readonly store = inject(Store);
  readonly products: Signal<ProductInterface[]> = this.store.selectSignal(productsSelector);
  readonly isFetching: Signal<boolean> = this.store.selectSignal(isFetchingSelector);
  readonly errors: Signal<BackendError | null> = this.store.selectSignal(errorSelector);

  ngOnInit(): void {
    this.store.dispatch(fetchProductsAction());
  }

  productTrackBy(index: number, product: ProductInterface) {
    return product.id;
  }
}
