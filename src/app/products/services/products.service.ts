import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

import { HttpClient } from '@angular/common/http';
import { PaginationInterface } from 'src/app/shared/types/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductInterface[]> {
    return this.http.get<PaginationInterface<ProductInterface>>('https://shoply-api.nanoit.dev/api/products')
      .pipe(map(response => response.data));
  }
}
