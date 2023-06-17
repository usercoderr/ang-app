import {Component, OnInit} from '@angular/core';
import {products} from "../../data/product";
import {ProductService} from "../../service/product.service";
import {ModalService} from "../../service/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{

  isLoading = false
  search = ''
  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {
  }
  ngOnInit():void {
    this.isLoading = true
    this.productService.getProducts().subscribe(() =>{
      this.isLoading = false
    })
}
}
