import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { AuthoritPage } from '../authorit/authorit';
import { ShequPage } from '../shequ/shequ';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';


/**
 * Generated class for the FeelPage page.
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
}

@IonicPage()
@Component({
  selector: 'page-feel',
  templateUrl: 'feel.html',
})
export class FeelPage {
  text;
  uid=this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider,private storage:StorageProvider) {
  }
  getList(){
    let data=JSON.stringify({
      scontent:this.text,
      simage:null,
      uid:this.uid
    });
    this.api.postSay(data).then(data=>{
      console.dir(data);
    });
  }

  goCamera(){
    this.navCtrl.push(CameraPage);
  }
  goAuthority(){
    this.navCtrl.push(AuthoritPage);
  }
  openModal(){
    this.getList();
    this.navCtrl.setRoot(ShequPage);
  }
}

