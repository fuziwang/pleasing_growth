import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { TouxiangPage } from '../touxiang/touxiang';
import { App } from 'ionic-angular';

/**
 * Generated class for the XingquPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xingqu',
  templateUrl: 'xingqu.html',
})
export class XingquPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }
  is:number=0;
  num:number=0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad XingquPage');
  }
  tiaoguo(){
    this.navCtrl.push(TabsPage);
  }
  change_girl(){
   this.is=1;
   this.num=0;
  
  }
  change_boy(){
    this.is=1;
    this.num=1;

   }
   last(){
     this.app.getRootNav().push(TouxiangPage);
   }
 shouye(){
  this.app.getRootNavs()[0].setRoot(TabsPage);
 }
}
