import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ChoosePage } from '../choose/choose';
import { CommunityPage } from '../community/community';
import { App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the VidioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vidio',
  templateUrl: 'vidio.html',
})
export class VidioPage {
arr=[1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
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
