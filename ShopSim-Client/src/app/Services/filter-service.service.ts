import { Injectable } from '@angular/core';
import { FiltersComponent } from '../Pages/store-display-page/filters/filters.component';
import { ProductListComponent } from '../Pages/store-display-page/product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})

/**
 * this service enables us to share filter variables from the filters component into the ProductList component to be used in the onSearchClick() method
 * also enables the filter component to call onSearchClick()
 */
export class FilterServiceService {

  public filter?: FiltersComponent;
  public search?: ProductListComponent;

  constructor() { }
}
