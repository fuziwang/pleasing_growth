import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
import { MyPage } from '../my/my';
// import { ModalPage } from './ModalPage';
/**
 * Generated class for the MyPage page.
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
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  name;
  sex;
  age;
  where;
  describe;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,private storage:StorageProvider) {
    
  }
  list:Array<user>=[];
 uid=this.storage.getItem('uid');  
 getList(){
    //获取list用于显示
    
    let data=JSON.stringify({
      uid:this.uid,
      uname:this.name,
      usex:this.sex,
      uage:this.age,
      uwhere:this.where,
      udescribe:this.describe,
      topic:['娱乐'],
    });
    this.api.postEdit(data).then(data=>{
      console.dir(data);
    });

    
  }
  my(){
    this.getList();
    this.navCtrl.setRoot(MyPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
