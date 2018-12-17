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
  tel;
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
  logIn(){
    this.storage.setItem('pwd',this.pwd);
    console.log('忘记密码',this.pwd);
    this.getList();
    this.navCtrl.push(LoginPage);
  }
}
