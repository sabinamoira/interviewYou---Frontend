import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../common/category/category.component';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CategoryService {
 
  private categorysUrl: string;
 
  constructor(private http: HttpClient) {
    this.categorysUrl = 'http://localhost:8080/api/categorys';
  }
 
  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categorysUrl);
  }
 
  public save(category: Category) {
    return this.http.post<Category>(this.categorysUrl, category);
  }
}