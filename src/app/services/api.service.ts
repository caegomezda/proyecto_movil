import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = 
      { headers: new HttpHeaders(
        { 'Content-Type':  'application/json',
        }) };
   }

  readData(){
      const apiUrl = 'http://localhost/colombia_taxis/proyecto_prueba_movil/api/product/read.php';
      let json = {}
      let result = this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
      return result
  }

  creatProduct(form){
    console.log("creatProducto")
    console.log("formulario en el api",form)
    let product = JSON.stringify(form);
    
    console.log("JSON FORM",product);

    const apiUrl = 'http://localhost/colombia_taxis/proyecto_prueba_movil/api/product/create.php';
      let json = {product}
      let result = this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
      console.log("result api create",result);
  }


}
