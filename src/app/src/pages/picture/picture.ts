import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPage } from '../community/community';
import { ChoosePage } from '../choose/choose';
import { ContactPage } from '../contact/contact';
import { App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }
  arr=[1,2,3];
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
