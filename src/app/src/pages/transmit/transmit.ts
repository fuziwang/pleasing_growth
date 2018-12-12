import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { AuthoritPage } from '../authorit/authorit';
import { ShequPage } from '../shequ/shequ';

/**
 * Generated class for the TransmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transmit',
  templateUrl: 'transmit.html',
})
export class TransmitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goCamera(){
    this.navCtrl.push(CameraPage);
  }
  goAuthority(){
    this.navCtrl.push(AuthoritPage);
  }
  openModal(){
    this.navCtrl.push(ShequPage);
  }
}
