import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PanGesture } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { ZhucePage } from "../zhuce/zhuce";
import { SetPwdPage } from '../set-pwd/set-pwd';
import { TouxiangPage } from '../touxiang/touxiang';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the LoginPage page.
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
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController,private api:ApiProvider,private storage:StorageProvider) {
    
  }
  bo;
  uid;
  tel=this.storage.getItem('tel');
  pwd=this.storage.getItem('pwd');
 
  getList(){
//往后台传的数据
    let data=JSON.stringify({
      upass:this.pwd,
      utel:this.tel,
    });

    this.api.postLogin(data).then(data=>{
      console.log(data[0].uid)
      console.dir(data);
      this.storage.setItem('uid',data[0].uid);
      this.bo =Array.isArray(data)&& data.length==0;
      console.log(this.bo);
      if(this.bo!==true){
        this.navCtrl.push(TouxiangPage);
      }
     
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn( ) {
    this.getList();
    // console.log(this.bo);
    // if(this.bo!==true){
    //   this.navCtrl.push(TouxiangPage);
    // }
   
  }

  zhuce(){
    this.navCtrl.push(ZhucePage);
  }
  set(){
    this.navCtrl.push(SetPwdPage);
  }
}
