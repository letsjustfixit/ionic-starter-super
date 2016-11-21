import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: Concert[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        image: 'assets/img/rundmc-live.png',
        title: 'Run-D.M.C.',
        desc: 'The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.',
      },
      {
        image: 'assets/img/queen-live.png',
        title: 'Queen',
        desc: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.'
      },
      {
        image: 'assets/img/badu-live.png',
        title: 'Erykah Badu',
        desc: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.'
      },
      {
        image: 'assets/img/nin-live.png',
        title: 'Nine Inch Nails',
        desc: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
      }
    ];

  }
}

class Concert {}