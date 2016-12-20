import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, NavParams, ScrollEvent } from 'ionic-angular';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ItemDetailPage {
  item: any;

  headerHeight: number;
  translateAmt: number;
  scaleAmt: number;

  @ViewChild('profilePic') profilePic;


  constructor(public navCtrl: NavController, navParams: NavParams, public renderer: Renderer, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  onWindowResize(ev) {
    this.headerHeight = this.profilePic.clientHeight;
  }

  onScroll(ev: ScrollEvent) {
    ev.domWrite(() => {
      // DOM writes must go within domWrite()
      // to prevent any layout thrashing
      this.profilePic.nativeElement.style.transform = `translateY(${-ev.scrollTop}px)`;

      if(ev.scrollTop >= 0){
        this.translateAmt = ev.scrollTop / 2;
        this.scaleAmt = 1;
      } else {
        this.translateAmt = 0;
        this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
      }

      this.renderer.setElementStyle(this.profilePic.nativeElement, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')');
    });
  }

  ionViewDidLoad() {
    console.log('Profile image', this.profilePic)
  }

}
