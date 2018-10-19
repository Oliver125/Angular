import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/share/Products';
import { ProductsService } from 'src/app/share/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    producto: Products;
    constructor(public productsService: ProductsService) { }

    ngOnInit() {
        this.producto = this.productsService.getProduct(1);
        console.log(this.producto);
    }

}