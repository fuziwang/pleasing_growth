import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
  //定义post请求需要的头部
  public headers=new Headers({'Content-Type':'application/json'});
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  url:string = "/api/";
  //实例get Article请求
  public getList(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'article')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  //实例get Tiezi请求
  public getList_next(id){
    return new Promise((resolve, reject) => {
      console.log(id);
      this.http.get(this.url+'article/'+id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
//实例get 用户 请求
  public getMy(){
    return new Promise((resolve, reject) => {
      
      this.http.get(this.url+'user/2')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
//实例get 每个用户 请求
  public getMy_next(id){
    return new Promise((resolve, reject) => {
      console.log(id);
      this.http.get(this.url+'user/'+id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }

  //实例get 说说 请求
  public getSay(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'say')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  //实例get 评论 请求
  public getArticleComment(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'articlecomment')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
//实例get 评论 请求
public getArticleComment_next(id){
  return new Promise((resolve, reject) => {
    this.http.get(this.url+'articlecomment/'+id)
      .subscribe((res:Response)=>{
        resolve(res.json())
      },err=>{
        console.dir(err)
        reject()
    });
  });
}
  //实例get 相册 请求
  public getPhotos(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'photos')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  //实例post请求
  public postLogin(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user/login',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }


  public postZhuze(data){
    return new Promise((resolve, reject) => {
      this.http.post('https://jsonplaceholder.typicode.com/posts',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
}
