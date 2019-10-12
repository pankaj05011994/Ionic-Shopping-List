import { HomePage } from './../home/home';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.interface';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the EditShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-edit-shopping-list',
  templateUrl: 'edit-shopping-list.html',
})
export class EditShoppingListPage {

  item: Item;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad EditShoppingListPage');
    console.log(this.navParams.get('item'));
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shoppingListService.editItem(item).then(()=>{
      this.toast.show(`${item.name} is saved!`, 1000);
      this.navCtrl.setRoot('HomePage');
    })

  }

  deleteItem(item: Item) {
this.shoppingListService.removeItem(item).then(()=>{
  this.toast.show(`${item.name} is removed!` , 1000);
  this.navCtrl.setRoot('HomePage');
})
  }

}
