import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePage } from './choose';

@NgModule({
  declarations: [
    ChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePage),
  ],
})
export class ChoosePageModule {}
