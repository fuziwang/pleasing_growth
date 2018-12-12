import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationPage } from './creation';

@NgModule({
  declarations: [
    CreationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreationPage),
  ],
})
export class CreationPageModule {}
