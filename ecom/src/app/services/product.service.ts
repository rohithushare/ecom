import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/master';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }

  getAllProducts() : Observable<Products[]> {
    return this.http.get<Products[]>('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts')
  }
}
