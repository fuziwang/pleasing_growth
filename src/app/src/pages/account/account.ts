import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { ApiProvider } from "../../providers/api/api";//引入服务
/**
 * Generated class for the AccountPage page.
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
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
   
    this.getList();
    
  }
  list:Array<user>=[];
  getList(){
    //获取list用于显示
    this.api.getMy().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }
  edit(){
    this.navCtrl.push(EditPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
