import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { PicturePage } from '../picture/picture';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  changeId;
  num=0;
  arr=[];
  text:string='';
  change_text;
  isCheck=0;
  isdel=0;
  add(){
    this.isCheck=1;
  }
  quxiao(){
    this.isCheck=0;
    this.isdel=0;
  }
  addArr(){
    this.arr.push(this.text);
    console.log(this.arr);
    this.isCheck=0;
    this.num=this.arr.length;
  }
  change(id){
    this.changeId=id;
    this.isdel=1;

  }
  del(id){
    this.isdel=0;
    this.arr.splice(id-1,1,);
    console.log(this.arr);
  }
  change_content(){
    this.isdel=0;
    var newone =this.change_text;
    console.log(this.changeId);
    this.arr.splice(this.changeId,1,newone);
    console.log(this.arr);
  }
  goPicture(){
    this.navCtrl.push(PicturePage);
  }
  goVidio(){
    this.navCtrl.push(VideoPage);
  }
}
