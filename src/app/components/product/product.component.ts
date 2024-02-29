import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {
    
    products:Product[] = [];

}
