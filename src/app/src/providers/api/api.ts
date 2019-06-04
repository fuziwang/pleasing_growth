import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Injectable()
export class ApiProvider {
  //定义post请求需要的头部
  public headers=new Headers({'Content-Type':'application/json'});
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  url:string = "/api/";


  //实例get Article请求
  public getList(uid){
    console.log(uid);
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'article/sus/'+uid)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  public getNewList() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'article/new')
        .subscribe((res: Response) => {
          resolve(res.json())
        }, err => {
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
  //实例get BannerArticle(id){
  public getBanArticle(id){
    return new Promise((resolve,reject)=>{
      console.log(id);
      this.http.get(this.url+'bannerarticle/'+id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err);
          reject()
      });
    });
  }
   //实例post 说说评论请求
   public postSayComment(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'saycomment', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }
  //实例get 说说——next 请求
  public getSay_next(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'say/' + id)
        .subscribe((res: Response) => {
          resolve(res.json())
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }

  //实例get 说说评论 请求
  public getSaycomment(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'saycomment/' + id)
        .subscribe((res: Response) => {
          resolve(res.json())
        }, err => {
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

public createCode(len){
  var seed = new Array(
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      '0123456789'
            ); //创建需要的数据数组
    var idx,i;
    var result = ''; //返回的结果变量
    for (i=0; i<len; i++) //根据指定的长度
    {
        idx = Math.floor(Math.random()*3); //获得随机数据的整数部分-获取一个随机整数
        result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);//根据随机数获取数据中一个值
    }
          return result; //返回随机结果
  }

//实例get 短信验证
public getduanxin(){
  return new Promise((resolve, reject) => {
    this.http.get
    ('http://v.juhe.cn/sms/send?mobile=15226513121&tpl_id=123034&tpl_value=%23code%23%3D654654&key=c7534230547f1a15f64eb302c1312918')
      .subscribe((res:Response)=>{
        resolve(res.json())
      },err=>{
        console.dir(err)
        //reject()
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
  public getPhotos(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'photos/' + id)
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  //实例get 关注 请求
  public getFollow(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'userconcern/' + id)
        .subscribe((res: Response) => {
          resolve(res.json())
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }
  
    //实例get 粉丝 请求
    public getFans(id) {
      return new Promise((resolve, reject) => {
        this.http.get(this.url + 'userconcern/fans/' + id)
          .subscribe((res: Response) => {
            resolve(res.json())
          }, err => {
            console.dir(err)
            reject()
          });
      });
    }

  //实例post utel请求
  public postCheck(utel){
    return new Promise((resolve,reject)=>{
      console.log(utel);
      this.http.post(this.url+'user/check',utel,{headers:this.headers})
        .subscribe((res:Response)=>{
          resolve(res.json());
        },err=>{
          console.dir(err);
          reject();
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
          console.dir(err);
          reject()
        });
    });
  }

  //实例post 新建相册请求
  public postNewAlbum(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'photos', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }
  //实例post 评论请求
  public postPinglun(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'articlecomment', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }

  public postConcern(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'userconcern', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }

  //实例post tree请求
  public postTree(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'tree', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
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
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
  //实例post 拍照请求
  public postTakephoto(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'user/image', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
          console.dir(err)
          reject()
        });
    });
  }

  //实例post 相册选择照片请求
  public postChooseAlbum(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'user/image', data, { headers: this.headers })
        .subscribe((res: Response) => {
          console.log(res);
        }, err => {
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


