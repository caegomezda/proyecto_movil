import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  formProduct ={
    name:"",
    price:"",
    description:"",
    category_id:null,
  }
  id:any;
  constructor(private storage: StorageService,
              public formBuilder: FormBuilder,
              private alertController: AlertController,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit() {
    this.recieverForm();
  }

  async recieverForm(){

    let item = await this.storage.sendProductData()
    console.log("item",item)
    this.formProduct = {
      name:item.name,
      price:item.price,
      description:item.description,
      category_id:item.category_id,
    }
  }

  async upDateElement(){
    this.id = await this.storage.sendid();
    console.log("this.id",this.id);
    console.log("creacion de producto")
    console.log("this.from",this.formProduct);
    let newFormProduct = {
      id:this.id,
      name:this.formProduct.name,
      price:this.formProduct.price,
      description:this.formProduct.description,
      category_id:this.formProduct.category_id,
    }

    let toJson = JSON.stringify(newFormProduct);
    console.log("toJson",toJson);


    const alert = await this.alertController.create({
        header: '',
        subHeader: 'Insertado Correctamente',
        message: 'Producto actualizado correctamente',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/home']);
            }
          }
        ]
    });

    this.apiService.updateData(newFormProduct)
    // this.apiService.creatProduct(toJson);
    await alert.present()
  }



}
