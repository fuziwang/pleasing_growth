import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XingquPage } from './xingqu';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    XingquPage,
    FormsModule
  ],
  imports: [
    IonicPageModule.forChild(XingquPage),
  ],
})
export class XingquPageModule {}
