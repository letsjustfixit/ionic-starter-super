import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form: FormGroup;


  constructor(public navCtrl: NavController, public settings: Settings, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      option1: [''],
      option2: [''],
      option3: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      console.log('Changes made');
    });
    
    settings.load().then(() => {
      this.settingsReady = true;
      this.options = settings.allSettings;
    })
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }


  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
