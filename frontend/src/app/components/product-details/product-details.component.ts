import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // Instantiate to prevent
  // Alternatively we can add ? in the template after of product variable
  // ex: product?.imageUrl
  // Although this solution can be tedious
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const productId: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart(product: Product) {
    console.log(`Adding ${product.name} ${product.unitPrice} to cart.`);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }
}
