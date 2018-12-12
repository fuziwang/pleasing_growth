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
    // this.getList();
  }
  id=16;
  tel=this.storage.getItem('tel');
  pwd=this.storage.getItem('pwd');
  list:Array<user>=[];
  // getList(){
  //   //获取list用于显示
  //   this.api.getMy().then(data=>{
  //     //console.dir(data);
  //     this.list=<any>data;
  //     //console.dir(this.list);
  //   });
  //   console.log('电话是',this.tel);
  //   console.log('密码是',this.pwd);
  //   let data=JSON.stringify({
  //     upass:this.pwd,
  //     utel:this.tel,
     
  //   });
  //   this.api.postLogin(data).then(data=>{
  //     console.dir(data);
  //   });
    
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   

  }

  logIn( ) {
    this.navCtrl.push(TouxiangPage);
  }

  zhuce(){
    this.navCtrl.push(ZhucePage);
  }
  set(){
    this.navCtrl.push(SetPwdPage);
  }
}
