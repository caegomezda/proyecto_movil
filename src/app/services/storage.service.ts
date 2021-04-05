import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  productId:any;
  productData:any;
  constructor() { }


  recieveId(productId){
    this.productId = productId;
    console.log("this.productId",this.productId)
  }
  recieveProductData(productData){
    this.productData = productData;
    console.log("this.productData",this.productData);
  }

  async sendid(){
    return await this.productId;
  }

  async sendProductData(){
    return await this.productData;
  }
}
