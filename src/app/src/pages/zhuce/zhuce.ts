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
  yanzhengma;
  uid=this.storage.getItem('uid');
  pwd;
  text;
  userid;
  check='checked';
  isCheck=0;
  list:Array<user>=[];
  i;
  postList(){
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
      console.log('zhuce');
      console.dir(data);
    });
    
  }
  
  getList(){
    //获取list用于显示
    this.api.getMy(11).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      //console.dir(this.list);
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
    if(this.check==''){
      this.text='您还没有同意用户协议';
      this.isCheck=1;
    }
    this.storage.setItem('tel',this.tel);
    this.storage.setItem('pwd',this.pwd);
    console.log('电话是',this.tel);
    console.log('密码是',this.pwd);
   
    this.getUID();
    this.posttree();
    if(this.isCheck!=1){
      this.postList();
      this.navCtrl.push(LoginPage);
    }
  }

  getUID(){
    //往后台传的数据
        let data=JSON.stringify({
          upass:this.pwd,
          utel:this.tel,
        });
    
        this.api.postLogin(data).then(data=>{
          console.log(data);
          // if(data[0].uid){
          //     this.storage.setItem('uid',data[0].uid);
          //     this.storage.setItem('pwd',data[0].upwd);
          //     this.storage.setItem('tel',data[0].utel);
          // }
        });
      }



  logIn1(){
    this.navCtrl.push(LoginPage);
  }
  posttree() {
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

  checkPhone(){ 
    if(!(/^1[34578]\d{9}$/.test(this.tel))){ 
      //console.log('lalala')
        return false; 
    }else{
      return true;
    }
}

//校验密码：只能输入6-20个字母、数字、下划线  
  isPasswd(s){  
  var patrn=/^(\w){6,20}$/;  
  if (!patrn.exec(s)) return false
      return true
 }  

 onchange_pwd(){
  if(!this.isPasswd(this.pwd)){
    this.text='';
    this.isCheck=0;
  }
 }

 onchange_yanzhengma(){
  if(this.yanzhengma==0){
    this.text=''; 
    this.isCheck=0;
  }
 }

onchange_tel(){
  if(this.checkPhone()==true){
    this.text=''; 
    this.isCheck=0;
  }
}

  onBlur_tel(){
    if(this.tel==''){
      this.text='手机号码不能为空哦！';
      this.isCheck=1;
    }else{
      if(this.checkPhone()==false){
        this.text='手机号码格式不正确哦！'; 
        this.isCheck=1;
      }
    }
  }

  onBlur_yanzhengma(){
    if(this.yanzhengma==''){
      this.text='验证码不能为空哦！';
      this.isCheck=1;
    }else{
      if(this.yanzhengma!=0){
        this.text='验证码错误了哦！';
        this.isCheck=1;
      }
    }
  }

  onBlur_pwd(){
    if(this.pwd==''){
      this.text='密码不能为空哦！';
      this.isCheck=1;
    }else{
      if(!this.isPasswd(this.pwd)){
        this.text='请输入6-20个字符'; 
        this.isCheck=1;
      }
    }
    
  }
}
