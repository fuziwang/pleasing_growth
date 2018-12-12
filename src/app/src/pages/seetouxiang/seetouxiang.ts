import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { TouxiangPage } from '../touxiang/touxiang';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SeetouxiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seetouxiang',
  templateUrl: 'seetouxiang.html',
})
export class SeetouxiangPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider,private app:App) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeetouxiangPage');
   
  }
  touxiang(){
   this.app.getRootNavs()[0].setRoot(TabsPage);
  }
}
