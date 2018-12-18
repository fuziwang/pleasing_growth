import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider) {
   
  }
  tel=this.storage.setItem('tel','');
  pwd=this.storage.setItem('pwd','');

  next(){
    this.navCtrl.push(LoginPage);
  }
  
}
