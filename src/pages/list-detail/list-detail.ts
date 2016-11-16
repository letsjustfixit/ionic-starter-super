import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListDetailPage Page');
  }

}
