import { Injectable } from '@angular/core';

//importamos el cliente http para tirar la peticion
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //aqui es donde tenemos subido el json mediante json-server --watch items.json
  url: string = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  //metodo que devuelve todos los productos.
  getAllProducts(): any{
    return this.http.get(this.url);
  }

  getProduct( id: number ):any {
    return this.http.get(`${this.url}/${id}`);  
  }


}
