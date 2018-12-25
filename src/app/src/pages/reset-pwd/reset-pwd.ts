import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { StorageProvider } from '../../providers/storage/storage';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ResetPwdPage page.
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
  selector: 'page-reset-pwd',
  templateUrl: 'reset-pwd.html',
})
export class ResetPwdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider,private api:ApiProvider) {
  }
  tel=this.storage.getItem('tel');
  text;
  isCheck=1;
  pwd;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPwdPage');
  }
  getList(){
    
    let data=JSON.stringify({
      upass:this.pwd,
      utel:this.tel
     
    });
    this.api.postForget(data).then(data=>{
      console.dir(data);
    });
    
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
  logIn(){
    this.storage.setItem('pwd',this.pwd);
    console.log('忘记密码',this.pwd);
    console.log('手机号',this.tel);
    if(this,this.isCheck==0){
      this.getList();
      this.navCtrl.push(LoginPage);
    }
   
  }
}
