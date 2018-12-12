import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FansPage } from './fans';

@NgModule({
  declarations: [
    FansPage,
  ],
  imports: [
    IonicPageModule.forChild(FansPage),
  ],
})
export class FansPageModule {}
