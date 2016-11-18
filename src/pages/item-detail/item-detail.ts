import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Things } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, thing: Things) {
    this.item = navParams.get('item') || thing.defaultItem;
  }

  ionViewDidLoad() {
    console.log('Hello ItemDetailPage Page');

    
  }

}
