import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowPage } from './follow';

@NgModule({
  declarations: [
    FollowPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowPage),
  ],
})
export class FollowPageModule {}
