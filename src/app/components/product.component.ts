import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); //any emitir cualquier valor

    // tslint:disable-next-line: typedef
    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
