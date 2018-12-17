import { Component } from '@angular/core';
import { AccountPage } from '../account/account';
import { AlbumPage } from '../album/album';
import { VideoPage } from '../video/video';
import { FeedbackPage } from '../feedback/feedback';
import { SharePage } from '../share/share';
import { SetupPage } from '../setup/setup';
import { CreationPage } from '../creation/creation';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';
import { HomepagePage } from '../homepage/homepage';
import { EditPage } from '../edit/edit';
import { MessagePage } from '../message/message';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
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

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,private app:App,private storage:StorageProvider) {
   
    this.getList();
    
  }
  id=this.storage.getItem('uid');
  list:Array<user>=[];
  getList(){
    //获取list用于显示
    this.api.getMy(this.id).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      //console.dir(this.list);
    });
    
  }
  account(){
    this.app.getRootNav().push(AccountPage);
  }
  album(){
    this.app.getRootNav().push(AlbumPage);
  }
  video(){
    this.app.getRootNav().push(VideoPage);
  }
  feedback(){
    this.app.getRootNav().push(FeedbackPage);
  }
  share(){
    this.app.getRootNav().push(SharePage);
  }
  setup(){
    this.app.getRootNav().push(SetupPage);
  }
  creation(){
    this.app.getRootNav().push(CreationPage);
  }
  follow(){
    this.app.getRootNav().push(FollowPage);
  }
  fans(){
    this.app.getRootNav().push(FansPage);
  }
  homepage(){
    this.app.getRootNav().push(HomepagePage);
  }
  edit(){
    this.app.getRootNav().push(EditPage);
  }
  message(){
    this.app.getRootNav().push(MessagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
