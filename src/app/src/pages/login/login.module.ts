import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { TabsPage } from "../tabs/tabs";
import { ZhucePage } from "../zhuce/zhuce";
import { SetPwdPage } from '../set-pwd/set-pwd';
@NgModule({
  declarations: [
    LoginPage,
    TabsPage,
    ZhucePage,
    SetPwdPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
    TabsPage,
    ZhucePage,
    SetPwdPage
  ],
})
export class LoginPageModule {}
