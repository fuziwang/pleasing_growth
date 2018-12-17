import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XingquPage } from '../xingqu/xingqu';
import { StorageProvider } from '../../providers/storage/storage';
import { SeetouxiangPage } from '../seetouxiang/seetouxiang';

/**
 * Generated class for the TouxiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touxiang',
  templateUrl: 'touxiang.html',
})
export class TouxiangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouxiangPage');
    
  }
  seetouxiang(){
    var file=document.getElementById('file');
   this.navCtrl.push(SeetouxiangPage);
  }
  xingqu(){
    this.navCtrl.push(XingquPage);
  }

}
