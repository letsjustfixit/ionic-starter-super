import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Thing } from '../../providers/providers';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  items: Thing[];

  constructor(public navCtrl: NavController, public thing: Thing) {
  }

  ionViewDidLoad() {
    this.thing.query().subscribe(items => this.items = items.items);
  }

}
