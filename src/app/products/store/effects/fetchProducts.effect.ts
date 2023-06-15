import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { fetchProductsAction, fetchProductsFailureAction, fetchProductsSuccessAction } from '../actions/fetchProducts.action';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../types/product.interface';
import { BackendError } from 'src/app/shared/types/backendError.interface';


@Injectable()
export class FetchProductsEffect {
    getArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchProductsAction),
            switchMap(() => {
                return this.productsService.fetchProducts().pipe(
                    map((items: ProductInterface[]) => {
                        return fetchProductsSuccessAction({ items });
                    }),
                    catchError((error: BackendError) => {
                        return of(fetchProductsFailureAction({ error }));
                    }),
                );
            }),
        ),
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService,
    ) { }
}
