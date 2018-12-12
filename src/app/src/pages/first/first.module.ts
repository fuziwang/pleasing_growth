import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstPage } from './first';
import { LoginPage } from '../login/login';
@NgModule({
  declarations: [
    FirstPage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(FirstPage),
  ],
  entryComponents: [
    LoginPage,
   
  ],
})
export class FirstPageModule {}
