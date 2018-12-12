import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreationPage } from '../creation/creation';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface user{
  uid:number;
  uname:string;
  uimage:string;
  usex:string;
  uage:number;
  uwhere:string;
  utel:string;
  upass:string;
  ufans:number;
  uconcern:number;
  udescribe:string;
  ustatus:number;
}

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
   
    this.getList();
    
  }
  list:Array<user>=[];
  getList(){
    //获取list用于显示
    this.api.getMy().then(data=>{
      //console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }

  creation(){
    this.navCtrl.push(CreationPage);
  }
  follow(){
    this.navCtrl.push(FollowPage);
  }
  fans(){
    this.navCtrl.push(FansPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
