import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This service contains a method sendItemList which sends a post request back to the server with the data to create a new record in the itemlist table 
 */
export class CreateItemListService {

  private checkOrder = false; //check if an order has been saved for this session
  private createItemListUrl = 'http://localhost:8080/ShopSim/shop/itemList'; //this should be our java server api path
  private requestHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private httpClient: HttpClient) { }
  
  //NOTE: these params need to have matching names to the newUserModel (which i assume is our user model/table)
  sendItemList(orderId: number, productId: number, quantity: number): Observable<any> {
    let body = `orderId=${orderId}&productId=${productId}&quantity=${quantity}`;
    return this.httpClient.post<any>(this.createItemListUrl, body, {headers: this.requestHeaders, observe: 'response'});
   }
}
