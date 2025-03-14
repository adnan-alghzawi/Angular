import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdnanServiceService {

  constructor(private _url: HttpClient) { }

  getCategory() {

    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  //getProduct(categotyId :any) {

  //  return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  //}
  getProduct(categoryId: any) {
    return this._url.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products?categoryid=${categoryId}`);
  }

}
