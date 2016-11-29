import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  constructor(public navCtrl: NavController, public settings: Settings) {
    settings.load().then(() => {
      this.settingsReady = true;
      this.options = settings.allSettings;
    })
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }

}
