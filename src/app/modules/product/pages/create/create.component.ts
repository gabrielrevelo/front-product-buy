import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  product: Product = {
    name: "",
    inventory: 0,
    imageUrl: "",
    enabled: true,
    min: 0,
    max: 0
  }

  productToCreate = new FormGroup({
    name: new FormControl('', Validators.required),
    inventory: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    min: new FormControl('', Validators.required),
    max: new FormControl('', Validators.required),
  });

  constructor(private service: ProductService) {}

  createProduct() {
    this.product.name = this.productToCreate.value.name!;
    this.product.inventory = parseInt(this.productToCreate.value.inventory!);
    this.product.imageUrl = this.productToCreate.value.imageUrl!;
    this.product.min = parseInt(this.productToCreate.value.min!);
    this.product.max = parseInt(this.productToCreate.value.max!);
    console.log(this.product)
    this.service.createProduct(this.product).subscribe({
      next: (v) => {
        alert('Producto creado');
        window.location.replace('http://localhost:4200/product/list');
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }

}
