import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { PicturePage } from '../picture/picture';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

interface Fruit{
  fid:number;
  fname:string;
  ftime:string;
}


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 

  constructor(public navCtrl: NavController ,private api:ApiProvider,private storage:StorageProvider) {
    this.getList();
  }
  
  changeId;
  arr:Array<Fruit>=[];
  num=0;
  text;
  id=this.storage.getItem('uid');
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
    this.postAddApple();
    this.isCheck=0;
    
  }
  change(id){
    this.changeId=id;
    this.isdel=1;
    console.log(this.changeId);
  }

  del(){
   
    this.getDeleteApple();
    this.isdel=0;
    
  }

  change_content(){
    this.postChangeApple();
    this.isdel=0;
  }
  goPicture(){
    this.navCtrl.push(PicturePage);
  }
  goVidio(){
    this.navCtrl.push(VideoPage);
  }

  getDeleteApple(){
    let data=JSON.stringify({
     fid:this.changeId
    });
    this.api.postDeleteApple(data).then(data=>{
      console.dir(data);
    });
    this.getList();
  }

  postChangeApple(){
    let data=JSON.stringify({
     fid:this.changeId,
     fname:this.change_text
    });
    this.api.postChangeApple(data).then(data=>{
      console.dir(data);
    });
    this.getList();
  }

  postAddApple(){
    let data=JSON.stringify({
     tid:this.id,
     fname:this.text
    });
    this.api.postAddApple(data).then(data=>{
      console.dir(data);
     
    });
    this.getList();
  }

  getList(){
    //获取list用于显示
    this.api.getApple(this.id).then(data=>{
      console.dir(data);
      this.arr=<any>data;
      this.num=this.arr.length;
    });
   
  }
}
