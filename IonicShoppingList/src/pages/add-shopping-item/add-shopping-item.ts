import { ToastService } from './../../services/toast/toast.service';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item/item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name : '',
    quantity : undefined,
    price : undefined,
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item : Item) {
this.shoppingListService.addItem(item).then((ref) => {
  this.toast.show(`${item.name} is added! `, 1000);
  this.navCtrl.setRoot('HomePage', {key: ref.key});
})
  }

}
