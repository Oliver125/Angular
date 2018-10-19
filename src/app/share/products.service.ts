import { Injectable } from "@angular/core";
import { Products } from "./Products";
import { PRODUCTS } from "./PRODUCTS_LIST"

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    constructor() { }
    getProducts(): Products[] {
        return PRODUCTS;
    }
    getProduct(id: number): Products {
        return PRODUCTS.filter((prod) => { return prod.id == id })[0];
    }
}