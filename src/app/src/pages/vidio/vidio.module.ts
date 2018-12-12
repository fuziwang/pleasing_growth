import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VidioPage } from './vidio';

@NgModule({
  declarations: [
    VidioPage,
  ],
  imports: [
    IonicPageModule.forChild(VidioPage),
  ],
})
export class VidioPageModule {}
