import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PicturePage } from './picture';

@NgModule({
  declarations: [
    PicturePage,
  ],
  imports: [
    IonicPageModule.forChild(PicturePage),
  ],
})
export class PicturePageModule {}
