import { Component, OnInit } from '@angular/core';
import { Category } from '../../common/category/category.component'; 
import { CategoryService } from '../../_services/category.service';
 
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 
  categorys: Category[];
 
  constructor(private categoryService: CategoryService) {
  }
 
  ngOnInit() {
    this.categoryService.findAll().subscribe(data => {
      this.categorys = data;
    });
  }
}
