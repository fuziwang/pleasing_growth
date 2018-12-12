import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';
import { ApiProvider } from '../../providers/api/api';

import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.getList();
  }
  list:Array<Photos>=[];

  content;
  getList(){
    //获取list用于显示
    this.api.getPhotos().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }
  photo(){
    this.navCtrl.push(PhotoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
  }

}
