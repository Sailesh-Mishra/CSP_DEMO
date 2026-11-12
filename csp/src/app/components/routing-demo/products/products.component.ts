import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsList: any[] = [];
  constructor(
    private products: ProductsService
  ) { }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.products.getProducts().subscribe((data: any) => {
      // console.log(data);
      this.productsList = data;
    })
  }

  canExit() {
    return confirm('Do you want to leave?');
  }
}
