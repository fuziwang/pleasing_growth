import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransmitPage } from './transmit';

@NgModule({
  declarations: [
    TransmitPage,
  ],
  imports: [
    IonicPageModule.forChild(TransmitPage),
  ],
})
export class TransmitPageModule {}
