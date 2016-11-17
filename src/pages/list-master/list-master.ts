import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListDetailPage } from '../list-detail/list-detail';

import { Things } from '../../providers/providers';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  items: any[];

  constructor(public navCtrl: NavController, public thing: Things) {
  }

  ionViewDidLoad() {
    this.thing.query().subscribe(items => this.items = items.items);
  }

  openItem(item: Things) {
    this.navCtrl.push(ListDetailPage, {
      item: item
    });
  }
}
