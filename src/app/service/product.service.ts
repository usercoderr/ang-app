import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, tap} from "rxjs";
import {IProduct} from "../models /product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  products:IProduct[] = []
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(
        tap(products => this.products = products)
      )
  }
}
