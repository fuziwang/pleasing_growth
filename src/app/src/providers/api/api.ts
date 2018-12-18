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

   //实例get 照片 请求
   public getPhoto(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'photo/'+id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }


  //实例get 视频 请求
  public getVideo(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'video')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
//实例get 用户 请求
  public getMy(id){
    return new Promise((resolve, reject) => {
      
      this.http.get(this.url+'user/'+id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  //实例get 用户 请求
  public getApple(id){
    return new Promise((resolve, reject) => {
      
      this.http.get(this.url+'fruit/'+id)
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


  //实例post 忘记密码请求
  public postForget(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user/forget',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

   //实例post 删除果实请求
   public postDeleteApple(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'fruit/delete',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
   //实例post 添加果实请求
   public postAddApple(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'fruit',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
  //实例post 修改果实请求
  public postChangeApple(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'fruit/update',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

  //实例post 兴趣性别请求
  public postXingqu(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user/sexhobby',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
  //实例post Back请求
  public postBack(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'back',data,{headers:this.headers})
        .subscribe((res:Response)=>{
         console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
  public postSay(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'say',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

  public postArticle(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'article',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

  public postEdit(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user/update',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
//实例POST注册
  public postZhuze(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user/reg',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
}


