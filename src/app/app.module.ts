import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    ContentPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContentPage,
    LoginPage
  ],
  providers: []
})
export class AppModule {}
