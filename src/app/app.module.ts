import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Pages } from '../pages/pages';
import { Providers } from '../providers/providers';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

let declarations = [
  MyApp
].concat(Pages);

let entryComponents = [
  MyApp
].concat(Pages);

let providers = [
  // Keep this to enable Ionic's runtime error handling during development
  { provide: ErrorHandler, useClass: IonicErrorHandler },
].concat(Providers);

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
  providers: providers
})
export class AppModule {}
