import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务
import { ContentPage } from "../content/content";
import { HomepagePage } from "../homepage/homepage";
import { SharePage} from "../share/share";
import { TransmitPage } from '../transmit/transmit';
/**
 * Generated class for the ShequPage page.
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
  uname:string;
  uimage:string;
}


@IonicPage()
@Component({
  selector: 'page-shequ',
  templateUrl: 'shequ.html',
})
export class ShequPage {
  isCheck=0;
  isPl=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
    this.getList();
  }
  list:Array<Say>=[];
  arr=[1,2,3];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShequPage');
  }
  fenXiang(){
    this.isCheck=1;
   }
   pL(){
     this.isPl=1;
    }
  getList(){
    //获取list用于显示
    this.api.getSay().then(data=>{
      console.dir(data);
      this.list=<any>data;
    });

  }
  goShare(){
    this.navCtrl.push(SharePage);
  }
  goHomeage(){
    this.navCtrl.push(HomepagePage);
  }
  goContent(){
    this.navCtrl.push(ContentPage);
  }
  goTransmit(){
    this.navCtrl.push(TransmitPage);
  }

}
