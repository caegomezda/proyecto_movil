import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  info :any[];
  isload :Boolean = false;
  // items :Array<{ name: string}> = [];
  items:any[];
  constructor(private apiServices : ApiService,
              private router:Router,
              private storage: StorageService) {}
  ngOnInit(){
    console.log("ngOnInit");
    this.fetchCalling();
  }

  async fetchCalling(){
    let data = await this.apiServices.readData()
    let result = data['records'];
    this.info = result;
    this.isload = true;
    // console.log("data", data);
    console.log("this.info",await this.info);
  }

  async upDateElement(id,data){
    console.log("udated");
    console.log("id",id);
    await this.storage.recieveId(id);
    await this.storage.recieveProductData(data);
    this.router.navigate(['/update']);
  }

  onSearchTerm(ev: CustomEvent) {

    // for (let i = 0; i < this.info.length; i++) {
    //   this.items.push({
    //     name: this.info[i]['name'].charAt(0).toUpperCase() + this.info[i]['name'].slice(1),
    //   });
    // }

    // console.log("this.items1",this.items);
    this.items = this.info;
    console.log("this.items",this.items);

    const val = ev.detail.value;
    if (val && val.trim() !== '') {
      this.items = this.items.filter(term => {
        return term['name'].toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

}
