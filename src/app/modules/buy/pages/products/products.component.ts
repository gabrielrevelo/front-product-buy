import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;
  cart: Product[] = [];
  pages: Array<number> | undefined;
  page: number = 0;

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
    if (localStorage.getItem('cart')) {
      this.loadCart();
    }
  }

  getProducts(): void {
    this.service.getPage(this.page).subscribe((data) => {
      this.products = data;
      data.map((e) => (e.quantity = 0));
    });
    this.service
      .getTotalPages()
      .subscribe((data) => (this.pages = new Array(data)));
  }

  getPage(page: number): void {
    this.page = page;
    this.getProducts();
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
  }

  addToCart(product: Product): void {
    console.log(this.cart);
    if (!this.cart.some((productCart) => productCart.name === product.name)) {
      this.cart.push(product);
    }
    ++this.cart[
      this.cart.findIndex((productCart) => productCart.name === product.name)
    ].quantity!;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log(JSON.parse(localStorage.getItem('cart')!));
  }

  deleteCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
