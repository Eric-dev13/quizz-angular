import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAll = (): Observable<Category[]> => {
    return this.http.get<Category[]>(`${environment.API_BASE_URL}api/categories`);
  }

  findById = (id: number): Observable<Category> => {
    return this.http.get<Category>(`${environment.API_BASE_URL}api/categories/` + id);
  }
}
