import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController,
              private router: Router) {}
  ngOnInit(){
    
  }
  async  openMenu() {
    await this.menu.open();
  }


  read(){
    console.log("Read");
    this.router.navigate(['/read'])
  }
  // update(){
  //   console.log("Update");
  //   this.router.navigate(['/update'])
  // }
  create(){
    console.log("Create");
    this.router.navigate(['/create'])
    
  }
}
