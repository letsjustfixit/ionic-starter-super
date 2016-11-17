import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ListDetailPage } from '../list-detail/list-detail';
import { ItemCreatePage } from '../item-create/item-create';

import { Thing } from '../../models/thing';
import { Things } from '../../providers/providers';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  items: any[];

  constructor(public navCtrl: NavController, public things: Things, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.things.query().subscribe(items => this.items = items.items);
  }

  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.present();
  }

  openItem(item: Things) {
    this.navCtrl.push(ListDetailPage, {
      item: item
    });
  }
}
