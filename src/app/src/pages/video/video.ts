import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Video{
  vid:number;
  vname:string;
  vtype:string;
  vlocal:string;
  vtime:string;
  vstatus:number;
  uid:number;
}
@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.getList();
  }
  list:Array<Video>=[];

  content;
  getList(){
    //获取list用于显示
    this.api.getVideo().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
