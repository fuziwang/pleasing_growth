import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';
import { ApiProvider } from '../../providers/api/api';

import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Photos{
  xid:number;
  xname:string;
  xcount:number;
  xlocal:string;
  xtime:string;
  xstatus:number;
  uid:number;
}
@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public storage:StorageProvider) {
    // this.getList();
  }
  list:Array<Photos>=[];

  content;
  isCheck=0;
  addArr() {
    this.postNewAlbum();
    this.isCheck = 0;
    this.getList();
  }
  quxiao() {
    this.isCheck=0;
  }
  text;
  uid=this.storage.getItem('uid');
  newAlbum(){
    this.isCheck=1;
  }
  postNewAlbum() {
    let data = JSON.stringify({
      xname: this.text,
      uid:this.uid,      
    });
    this.api.postNewAlbum(data).then(data => {
      console.dir(data);
    });
  }
  
  getList(){
    //获取list用于显示
    this.api.getPhotos(this.uid).then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }
  photo(xid){
    this.navCtrl.push(PhotoPage,
      {
        id : xid
      });
  }
  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad AlbumPage');
  }

}
