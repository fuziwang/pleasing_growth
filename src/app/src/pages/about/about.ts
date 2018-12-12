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
  num=0;
  arr=[];
  text:string='';
  isCheck=0;
  add(){
    this.isCheck=1;
  }
  quxiao(){
    this.isCheck=0;
  }
  addArr(){
    this.arr.push(this.text);
    localStorage.setItem("this.num","this.text");
    console.log(localStorage.getItem("this.num"));
    console.log(this.arr);
    this.isCheck=0;
    this.num=this.arr.length;
  }
  goPicture(){
    this.navCtrl.push(PicturePage);
  }
  goVidio(){
    this.navCtrl.push(VideoPage);
  }
}
