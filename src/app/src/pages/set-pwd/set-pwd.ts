import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';
/**
 * Generated class for the SetPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-pwd',
  templateUrl: 'set-pwd.html',
})
export class SetPwdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPwdPage');
  }
  reset(){
    this.navCtrl.push(ResetPwdPage);
  }
}
