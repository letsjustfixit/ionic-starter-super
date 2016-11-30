import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Settings } from '../../providers/settings';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
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

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
              public settings: Settings,
              public formBuilder: FormBuilder,
              public navParams: NavParams,
              public translate: TranslateService) {
    // Build an empty form for the template to render
    this.form = formBuilder.group({});

    this.page = navParams.get('page') || this.page;
    this.pageTitleKey = navParams.get('pageTitleKey') || this.pageTitleKey;

    translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    settings.load().then(() => {
      this.settingsReady = true;
      this.options = settings.allSettings;

      this._buildForm();
    });
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch(this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
