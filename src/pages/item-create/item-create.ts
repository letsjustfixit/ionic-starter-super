import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the ItemCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      about: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = false;

      let val;
      for(let key in v) {
        val = v[key];
        if(val && val !== '') {
          this.isReadyToSave = true;
          break;
        }
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
