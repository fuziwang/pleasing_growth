import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the SetPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-pwd',
  templateUrl: 'set-pwd.html',
})
export class SetPwdPage {
  tel;
  text;
  isCheck=1;
  yanzhengma;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider, public storage:StorageProvider) {
  }
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPwdPage');
  }
  checkPhone(){ 
    if(!(/^1[34578]\d{9}$/.test(this.tel))){ 
      //console.log('lalala')
        return false; 
    }else{
      return true;
    }
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
  reset(){
    this.storage.setItem('tel',this.tel);
    console.log(this.storage.getItem('tel'));
    if(this.isCheck==0){
      this.navCtrl.push(ResetPwdPage);
    }
   
  }
}
