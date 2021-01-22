import { Injectable } from '@angular/core';

//importamos el cliente http para tirar la peticion
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestacadosProductsService {

  //aqui es donde tenemos subido el json mediante json-server --watch featured.json --port 3001
  url: string = 'http://localhost:3001/featured';

  constructor(private http: HttpClient) { }


  //metodo que devuelve todos los productos.
  getAllFeatureds(): any{
    return this.http.get(this.url);
  }

  //metodos que devuelve el producto por id
  getFeatured( id: number ):any {
    return this.http.get(`${this.url}/${id}`);  
  }
}
