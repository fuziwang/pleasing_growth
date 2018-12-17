import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPage } from '../community/community';
import { ChoosePage } from '../choose/choose';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  arr=[1,2,3,4,5];
  check:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkBox(){
    this.check=1;
  }
  edit(){
    this.navCtrl.pop();
  }
  goChoose(){
    this.navCtrl.push(ChoosePage);
  }
  chengGong(){
    this.navCtrl.push(CommunityPage);
  }
  
}
