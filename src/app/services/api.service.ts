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

  redDataOne(id){
    const apiUrl = `http://localhost/colombia_taxis/proyecto_prueba_movil/api/product/read_one.php?id=${id}`;
    let json = {}
    let result = this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
    return result
  }

  creatProduct(form){
    
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
   var url = 'http://localhost/colombia_taxis/proyecto_prueba_movil/api/product/create.php';
   return new Promise(resolve => {
    this.http.post(url,JSON.stringify(form),options)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

  updateData(form){
    
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
   var url = 'http://localhost/colombia_taxis/proyecto_prueba_movil/api/product/update.php';
   return new Promise(resolve => {
    this.http.post(url,JSON.stringify(form),options)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

}
