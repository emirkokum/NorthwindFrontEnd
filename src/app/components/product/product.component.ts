import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
	products: Product[] = [];
	dataLoaded = false;

	constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

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
}
