import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TieziPage } from '../tiezi/tiezi';
import { XingquPage } from '../xingqu/xingqu';
import { App } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务

//定义首页格式接口
interface Article {
  aid: number;
  atitle:string;
  aimage:string;
  uid:string;
  
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg:string;//提示信息
  isLogin:boolean=true;//是否登录
  list:Array<Article>=[];

  isActive=true;
  isClick(i){
    this.isActive=i;
  }

  arr=[1,2,3,4];
  constructor(public navCtrl: NavController,private app:App, public api:ApiProvider ) {
    this.getList();
  }
  
  getList(){
    //获取list用于显示
    this.api.getList().then(data=>{
      console.dir(data);
      this.list=<any>data;
    });
    //测试post请求
    // let data=JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1
    // });
    // this.api.postData(data).then(data=>{
    //   console.dir(data);
    // });
  }
  
  
  last(){
    this.app.getRootNav().push(XingquPage);
  }
  next(index){
    this.navCtrl.push(TieziPage,{
      id : index
    });
    console.log(index);

  }
  doRefresh(refresher) {
    console.log('Begin async       operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
