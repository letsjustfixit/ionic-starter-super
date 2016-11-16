import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
