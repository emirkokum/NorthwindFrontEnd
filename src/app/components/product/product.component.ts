import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';


@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CommonModule, VatAddedPipe, FormsModule, FilterPipePipe],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
	products: Product[] = [];
	dataLoaded = false;
	filterText = "";

	constructor(private productService: ProductService,
		private activatedRoute: ActivatedRoute,
		private toastrService: ToastrService,
		private cartService: CartService) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			if (params["categoryID"]) {
				this.getProductsByCategory(params["categoryID"])
			} else {
				this.getProducts()
			}
		})
	}

	getProducts() {
		this.productService.getProducts().subscribe(response => {
			this.products = response.data
			this.dataLoaded = true;
		})
	}

	getProductsByCategory(categoryID: number) {
		this.productService.getProductsByCategory(categoryID).subscribe(response => {
			this.products = response.data
			this.dataLoaded = true;
		})
	}

	addToCart(product: Product) {
		if (product.unitsInStock > 0) {			
			this.cartService.addToCart(product)			
			this.toastrService.success("Added to Cart", product.productName)
		} else {
			this.toastrService.error("There is no stock", product.productName)
		}
	}
}
