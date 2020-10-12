import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];

  private _listFilter: string;

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.applyFilter(this.listFilter) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  applyFilter(filter: string): IProduct[] {
    filter = filter.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter) !== -1);
  }

  onNotify(message: string): void {
    this.pageTitle = message;
    // console.log(message);
  }
}
