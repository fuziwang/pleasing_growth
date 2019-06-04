import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the BannerarticlePage page.
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
  selector: 'page-bannerarticle',
  templateUrl: 'bannerarticle.html',
})



export class BannerarticlePage {

  dianzannum=this.storage.getItem('dianzannum');
  seenum=this.storage.getItem('seenum');

  isCheck=0;
  arr=[1];
  isColor=0;
  id;
  value="";
  length = 0;
  cid;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public storage:StorageProvider) {
    this.id=navParams.get('id');
    console.log(this.id);
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

  postList() {
    let data = JSON.stringify({
      accontent: this.value,
      aid: this.id,
      uid: this.uid,
    });
    this.api.postPinglun(data).then(data => {
      console.log(data);
      console.log(this);
      // this.getarticlecomment();
    });

  }
  comment(){
    this.postList();
    this.value="";
    this.length = 0;
    this.getarticlecomment();
  }
  getList(){
    //获取list用于显示
    this.api.getBanArticle(this.id).then(data=>{
      // console.log(this.id);
      //console.dir(data);
      this.list=<any>data;
      console.log(this.list);
      // console.dir(this.list);
      this.content=this.list[0].acontent.split('|').join("\n");
      // console.log(this.content);
    });
    
  }
  dianzan() {
    if (this.isColor == 1) {
      this.isColor = 0;
      this.dianzannum--;
    } else {
      this.isColor = 1;
      this.dianzannum++;
      this.storage.setItem('dianzannum', this.dianzannum);
    }

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