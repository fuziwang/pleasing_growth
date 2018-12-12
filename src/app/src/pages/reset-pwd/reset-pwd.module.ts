import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPwdPage } from './reset-pwd';

@NgModule({
  declarations: [
    ResetPwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPwdPage),
  ],
})
export class ResetPwdPageModule {}
