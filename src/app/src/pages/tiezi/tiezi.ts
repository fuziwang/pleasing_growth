import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the TieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Tiezi {
  aid: number;
  atitle:string;
  acontent:string;
  atime:string;
  aimage:string;
  uid:string;
}
interface  ArticleComment{
  aid: number;
  atitle:string;
  acontent:string;
  atime:string;
  aimage:string;
  uid:string;
  uimage:string;
  uname:string;
}
@IonicPage()
@Component({
  selector: 'page-tiezi',
  templateUrl: 'tiezi.html',
})



export class TieziPage {

  dianzannum=this.storage.getItem('dianzannum');
  seenum=this.storage.getItem('seenum');

  isCheck=0;
  arr=[1];
  id;
  value="";
  length = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public storage:StorageProvider) {
    this.id=navParams.get('id');
    this.getList();
    this.getarticlecomment();
    console.log(this.id);
  }
  list:Array<Tiezi>=[];
  commont:Array<ArticleComment>=[];
  content;
  getarticlecomment(){
    //获取list用于显示
    this.api.getArticleComment_next(this.id).then(data=>{
      console.dir(data);
      this.commont=<any>data;
    });
  }
  getList(){
    //获取list用于显示
    this.api.getList_next(this.id).then(data=>{
      console.log(this.id);
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
      this.content=this.list[0].acontent.split('|').join("\n");
      console.log(this.content);
    });
    
  }
  dianzan(){
    this.dianzannum++;
    this.storage.setItem('dianzannum',this.dianzannum);
  }
  last(){
    this.storage.setItem('dianzannum',this.dianzannum);    
    this.navCtrl.setRoot(HomePage);
  }
    fenxiang(){
      console.log(this.isCheck);
     this.isCheck=1;
     console.log(this.isCheck);
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad TieziPage');
  }
  len(value){
    this.length = value.length;
  }
}