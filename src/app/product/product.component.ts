import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck
} from '@angular/core';

import { Product } from '../product.model';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); //any emitir cualquier valor

    today= new Date();

    constructor() {
        console.log('1. constructor');
    }

    //ngOnChanges(changes: SimpleChanges): void {
    //   console.log('2. ngOnChanges');
    //  console.log(changes);
    //  }


    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDocheck');

    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
