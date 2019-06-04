import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Say{
  sid:number;
  scontent:string;
  stime:string;
  simage:string;
  status:number;
  uid:number;
  uname:string;
  uimage:string;
}
interface  SayComment{
  scid: number;
  sid:number;
  sccontent:string;
  sctime:string;
  uid:string;
  uimage:string;
  uname:string;
}
@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public storage:StorageProvider) {
    this.id=navParams.get('id');
    this.upid = navParams.get('upid');
    console.log('sid',this.id);
    this.getList();
    this.getsaycomment()
    console.log('sid',this.id);
    console.log('upid',this.upid);
  }
  id;
  upid;
  uid=this.storage.getItem('uid');
  value="";
  length = 0;
  list:Array<Say>=[];
  commont:Array<SayComment>=[];
  
  //get说说的详情
  getList(){
    //获取list用于显示
    this.api.getSay_next(this.id).then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.log(this.list);
      console.log(this.list[0].uimage);
      console.log(this.list[0].sid);
    });
  }
//POST 说说评论
  postsaycomment() {
    let data = JSON.stringify({
      sccontent: this.value,
      sid: this.id,
      uid: this.uid,
    });
    this.api.postSayComment(data).then(data => {
      console.log(data);
      console.log(this);
      // this.getarticlecomment();
    });
  }

//get说说评论
  getsaycomment(){
    //获取list用于显示
    this.api.getSaycomment(this.id).then(data=>{
      console.dir(data);
      this.commont=<any>data;
    });
  }

  concern(){
    let data = JSON.stringify({
      uid: this.uid,
      upid:this.upid
    });
    console.log(data);
    this.api.postConcern(data).then(data=>{
      console.dir(data);
    })
    document.querySelector('.concern').textContent = "已关注";
  }

  comment(){
    this.postsaycomment();
    this.value="";
    this.length = 0;
    this.getsaycomment();
  }
  len(value){
    this.length = value.length;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
