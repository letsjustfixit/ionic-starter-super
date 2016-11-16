import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListMaster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListMasterPage Page');
  }

}
