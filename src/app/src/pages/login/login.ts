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
  text;
  isCheck=0;
  tel=this.storage.getItem('tel');
  pwd=this.storage.getItem('pwd');
 
  getList(){
//往后台传的数据
    let data=JSON.stringify({
      upass:this.pwd,
      utel:this.tel,
    });

    this.api.postLogin(data).then(data=>{
      if(data[0].uid){
          // console.log(data[0].uid)
          // console.dir(data);
          this.storage.setItem('uid',data[0].uid);
          this.storage.setItem('pwd',data[0].upwd);
          this.storage.setItem('tel',data[0].utel);

      }
     
      this.bo =Array.isArray(data)&& data.length==0;
      console.log(this.bo);
      console.log(this.isCheck);
      if(this.bo!==true&&this.isCheck==0){
        this.navCtrl.push(TouxiangPage);
      }
     
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.pwd);
    console.log(this.tel);
  }

  logIn( ) {
    if(this.tel!=''&&this.pwd!=''){
      this.getList();
    }
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

  onchange_tel(){
    if(this.checkPhone()==true){
      this.text=''; 
      this.isCheck=0;
    }
  }
  
  onchange_pwd(){
    if(!this.isPasswd(this.pwd)){
      this.text='';
      this.isCheck=0;
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
  zhuce(){
    this.navCtrl.push(ZhucePage);
  }
  set(){
    this.navCtrl.push(SetPwdPage);
  }
}
