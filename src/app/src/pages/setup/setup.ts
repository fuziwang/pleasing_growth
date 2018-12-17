import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';
import { XieyiPage } from '../xieyi/xieyi';
import { AboutusPage } from '../aboutus/aboutus';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  resetpwd(){
    this.navCtrl.push(ResetPwdPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }
  xieyi(){
    this.navCtrl.push(AboutusPage);
  }

}
