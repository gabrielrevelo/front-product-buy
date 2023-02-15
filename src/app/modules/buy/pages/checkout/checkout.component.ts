import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { Buy } from 'src/app/interfaces/buy';
import { BuyService } from 'src/app/shared/services/buy.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
})
export class CheckoutComponent implements OnInit {
  cart: Product[] = [];

  client = new FormGroup({
    clientName: new FormControl('', Validators.required),
    idClient: new FormControl('', Validators.required),
    idType: new FormControl('', Validators.required),
  });

  buy: Buy = {
    date: '',
    idType: '',
    clientName: '',
    idClient: '',
    products: [],
  };

  constructor(private service: BuyService) {}

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.loadCart();
    }
    console.log(this.cart);
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
  }

  sendBuy(): void {
    var today = new Date();
    this.buy.date = today.toLocaleDateString();
    this.buy.clientName = this.client.value.clientName!;
    this.buy.idClient = this.client.value.idClient!;
    this.buy.idType = this.client.value.idType!;
    this.buy.products = this.cart.map((e) => {
      return { idProduct: e.id, quantity: e.quantity };
    });

    console.log(this.buy);

    this.service.buy(this.buy).subscribe({
      next: (v) => {
        alert('Compra realizada');
        window.location.replace('http://localhost:4200');
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });

    localStorage.removeItem('cart');
  }
}
