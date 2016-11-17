import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Thing } from '../../providers/providers';

@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, thing: Thing) {
    this.item = navParams.get('item') || thing.defaultItem;
  }

  ionViewDidLoad() {
    console.log('Hello ListDetailPage Page');
  }

}
