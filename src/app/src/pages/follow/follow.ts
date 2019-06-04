import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the FollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {
  arr;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, private storage: StorageProvider) {
    // this.getList();
  }

  getList(){
    this.api.getFollow(this.uid).then(data=>{
      console.dir(data);
      this.arr = <any>data;
    })
  }
  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad FollowPage');
  }

}
