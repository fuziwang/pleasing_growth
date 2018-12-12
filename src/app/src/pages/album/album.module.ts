import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumPage } from './album';

@NgModule({
  declarations: [
    AlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumPage),
  ],
})
export class AlbumPageModule {}
