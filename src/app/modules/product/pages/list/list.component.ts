import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getAll().subscribe((data) => {
      this.products = data;
      data.map((e) => (e.quantity = 0));
    });
  }

  delete(id: string) {
    this.service.delete(id)
  }

}
