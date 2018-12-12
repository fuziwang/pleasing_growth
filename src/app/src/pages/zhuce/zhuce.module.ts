import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZhucePage } from './zhuce';

@NgModule({
  declarations: [
    ZhucePage,
  ],
  imports: [
    IonicPageModule.forChild(ZhucePage),
  ],
})
export class ZhucePageModule {}
