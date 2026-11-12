import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {

  id: any;
  category: any;
  product: any = {};
  user: any;
  constructor(
    private products: ProductsService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.user = this.route.snapshot.data['user'];
  }

  ngOnInit() {
    this.getProductDetails();
    console.log(this.user);
  }

  getProductDetails() {
    this.products.getProductDetails(this.id).subscribe((data: any) => {
      console.log(this.category);
      this.product = data;
    })
  }

}
