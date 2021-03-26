import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  formProduct ={
    name:"",
    price:"",
    description:"",
    category_id:null,
    created : "",
  }

  // loginForm  = {
  //   username:"",
  //   password:"",
  // }

  constructor(private apiService : ApiService,
              public formBuilder: FormBuilder,
              private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }

  async createProduct(){
    console.log("creacion de producto")
    console.log("this.from",this.formProduct);

    const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Insertado Correctamente',
        message: 'Producto creado correctamente',
        buttons: ['OK']
    });

    this.apiService.creatProduct(this.formProduct);
    await alert.present();
    
    this.router.navigate(['/read']);
  }

}
