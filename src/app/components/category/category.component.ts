import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './category.component.html',
    styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {
    categories: Category[] = [];
    
    currentCategory :Category;

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.categoryService.getCategories().subscribe(response => {
            this.categories = response.data
        })
    }

    // take category from html to TS
    setCurrentCategory(category:Category){
        this.currentCategory = category;
    }

    // gets current category on the for loop and ask if it is same with our currentCategory
    getCurrentCategoryClass(category:Category){
        if (category == this.currentCategory) {
            return "list-group-item active"
        }else{
            return "list-group-item"
        }
    }

}
