import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	apiUrl = 'https://localhost:44337/api/';

	constructor(private httpClient: HttpClient) { } // Injection for api connection

	getProducts(): Observable<ListResponseModel<Product>> {
		let newPath = this.apiUrl + "products/getall"
		return this.httpClient.get<ListResponseModel<Product>>(newPath);
	}

	getProductsByCategory(categoryID: number): Observable<ListResponseModel<Product>> {
		let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryID
		return this.httpClient.get<ListResponseModel<Product>>(newPath);
	}
}
