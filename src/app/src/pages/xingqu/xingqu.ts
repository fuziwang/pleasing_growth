import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { TouxiangPage } from '../touxiang/touxiang';
import { App } from 'ionic-angular';
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the XingquPage page.
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
  selector: 'page-xingqu',
  templateUrl: 'xingqu.html',
})
export class XingquPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App,private api:ApiProvider,private storage:StorageProvider) {
    this.storage.setItem('seenum',this.seenum);
    this.storage.setItem('dianzannum',this.dianzannum);
  }
  is:number=0;
  num:number=0;
  seenum=45;
  dianzannum=67;
  sex;
  idx;
  uid=this.storage.getItem('uid');
  
  // data1=['益智游戏','心理健康','体育运动','出国留学','升学入学','出行旅游'];
  // data2=['情感专家','校园班级','漫画动漫','医学健康','娱乐明星','美食餐饮'];

  arr=['益智游戏','心理健康','娱乐明星','美食餐饮'];
  getList(){
    let data=JSON.stringify({
      usex:this.sex,
      topic:this.arr,
      uid:this.uid
    });
    this.api.postXingqu(data).then(data=>{
      console.dir(data);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XingquPage');
  }
  tiaoguo(){
    this.navCtrl.push(TabsPage);
  }
  change_girl(){
   this.is=1;
   this.num=0;
   this.sex='女';
  
  }
  change_boy(){
    this.is=1;
    this.num=1;
    this.sex='男';

   }
   last(){
     this.app.getRootNav().push(TouxiangPage);
   }
 shouye(){
  this.getList();
  this.app.getRootNavs()[0].setRoot(TabsPage);
 }
}
