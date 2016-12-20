import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  _items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {}

  getItems(ev) {
    let val = ev.target.value;
    this.items.query({
      name: val
    });
  }

}
