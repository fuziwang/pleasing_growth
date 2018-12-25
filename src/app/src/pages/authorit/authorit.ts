import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthoritPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authorit',
  templateUrl: 'authorit.html',
})
export class AuthoritPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  status = true;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthoritPage');
  }

  change(){
    this.status = !this.status;
  }
}
