import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models /product";

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if(!search.length) return  products
    return products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
