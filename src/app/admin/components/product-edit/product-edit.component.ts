import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MyValidators } from "./../../../utils/validators";

import { ProductsService } from "./../../../core/services/products/products.service";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private FormBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id= params.id;
      this.productService.getProduct(id)
        .subscribe(product => {
          this.form.patchValue(product)
        });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products'])
        });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.FormBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
