import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Pages } from '../pages/pages';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

import { User } from '../providers/user';

console.log('Pages', Pages);

let declarations = [
  MyApp
].concat(Pages);

let entryComponents = [
  MyApp
].concat(Pages);

@NgModule({
  declarations: declarations,
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents,
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    User // A simple User provider, remove if your app doesn't have "Users"
  ]
})
export class AppModule {}
