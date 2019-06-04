import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fans',
  templateUrl: 'fans.html',
})
export class FansPage {
  arr;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, private storage: StorageProvider) {
  }

  getList() {
    this.api.getFans(this.uid).then(data => {
      console.dir(data);
      this.arr = <any>data;
      console.log(this.arr);
    })
  }
  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad FansPage');
  }

}
