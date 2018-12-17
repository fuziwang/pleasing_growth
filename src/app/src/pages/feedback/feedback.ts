import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Back{
  rid:string;
  rcontent:string;
  rtel:string;
  rtime:string;
  rimage:string;
  rstatus:number;
}

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  tel;
  value;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }
  getList(){
    //往后台传的数据
        let data=JSON.stringify({
         rcontent:this.value,
         rtel : this.tel
        });
        this.api.postBack(data).then(data=>{
          console.dir(data);
        });
        
      }
  baocun(){
    console.log(this.value);
    console.log(this.tel);
    this.getList();

  }
}
