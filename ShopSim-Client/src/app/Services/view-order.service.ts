import { Injectable } from '@angular/core';
import { Order } from '../Models/Order';
import { Store } from '../Models/Store';

@Injectable({
  providedIn: 'root'
})

/**
 * this service enables us to link our store and order components in order to view our user's past orders 
 */
export class ViewOrderService {


  public order? : Order;
  public store? : Store;

  constructor() { }
}
