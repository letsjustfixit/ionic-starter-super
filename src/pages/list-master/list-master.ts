import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListDetailPage } from '../list-detail/list-detail';

import { Thing } from '../../providers/providers';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  items: any[];

  constructor(public navCtrl: NavController, public thing: Thing) {
  }

  ionViewDidLoad() {
    this.thing.query().subscribe(items => this.items = items.items);
  }

  openItem(item: Thing) {
    this.navCtrl.push(ListDetailPage, {
      item: item
    });
  }
}
