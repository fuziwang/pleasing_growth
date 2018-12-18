import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { XieyiPage }from '../xieyi/xieyi';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the ZhucePage page.
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
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController,private api:ApiProvider,private storage:StorageProvider) {
    
  }
  tel;
  uid=this.storage.getItem('uid');
  pwd;
  userid;
  list:Array<user>=[];
  i;
  getList(){
    //获取list用于显示
    // this.api.getMy().then(data=>{
    //   //console.dir(data);
    //   this.list=<any>data;
    //   //console.dir(this.list);
    // });
    
    let data=JSON.stringify({
      upass:this.pwd,
      utel:this.tel
     
    });
    this.api.postZhuze(data).then(data=>{
      console.dir(data);
    });
    
  }
  
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }
  getCode() {
    //点击按钮后开始倒计时\

    if( this.verifyCode.disable){
      this.settime();
      this.api.getduanxin();
      this.verifyCode.disable = false;
    }
   }
   settime() {
    if (this.verifyCode.countdown == 1) {
     this.verifyCode.countdown = 60;
     this.verifyCode.verifyCodeTips = "获取验证码";
     this.verifyCode.disable = true;
     return;
    } else {
     this.verifyCode.countdown--;
    }
    this.verifyCode.verifyCodeTips = this.verifyCode.countdown+"秒后重新获取";
    setTimeout(() => {
      this.verifyCode.verifyCodeTips = this.verifyCode.countdown+"秒后重新获取";
      this.settime();
    }, 1000);
   }
   
  logIn(){
    this.storage.setItem('tel',this.tel);
    this.storage.setItem('pwd',this.pwd);
    console.log('电话是',this.tel);
    console.log('密码是',this.pwd);
   
    this.getList();
    this.posttree();
    this.navCtrl.push(LoginPage);
  }
  posttree() {
    //获取list用于显示

    let data = JSON.stringify({
      uid: this.uid,
    });
    this.api.postTree(data).then(data => {
      console.dir(data);
    });


  }
  xieyi(){
    this.navCtrl.push(XieyiPage);
  }
}
