import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../share/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public productService: ProductsService ) { }

  ngOnInit() {
    console.log(this.productService.getProduct(1));
  }

}
