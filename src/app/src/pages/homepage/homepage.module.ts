import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepagePage } from './homepage';

@NgModule({
  declarations: [
    HomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(HomepagePage),
  ],
})
export class HomepagePageModule {}
