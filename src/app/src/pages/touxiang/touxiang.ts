import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, AlertController } from 'ionic-angular';
import { XingquPage } from '../xingqu/xingqu';
import { StorageProvider } from '../../providers/storage/storage';
import { SeetouxiangPage } from '../seetouxiang/seetouxiang';

import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the TouxiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touxiang',
  templateUrl: 'touxiang.html',
})
export class TouxiangPage {
  avatar: string = "";
  takephoto_image;
  chooseFromAlbum_image;
  uid=this.storage.getItem('uid');

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider,public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController,public imagePicker: ImagePicker, private camera: Camera,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouxiangPage');
    
  }
  seetouxiang(){
   var file=document.getElementById('file');
   this.navCtrl.push(SeetouxiangPage);
  }
  xingqu(){
    this.navCtrl.push(XingquPage);
  }

  get_takephoto() {
    let data = JSON.stringify({
      uid: this.uid,
      uimage:this.takephoto_image
    });
    this.api.postTakephoto(data).then(data => {
      console.dir(data);
      this.presentSucess();
    });

  }
  get_chooseAlbum() {
    let data = JSON.stringify({
      uid: this.uid,
      uimage: this.chooseFromAlbum_image
    });
    this.api.postChooseAlbum(data).then(data => {
      console.dir(data);
      this.presentSucess();
    });

  }

   //上传图片
   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });

    actionSheet.present().then(value => {
      return value;
    });
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      this.takephoto_image = image;
      if(image){
        this.avatar = image.slice(7);
        //alert(this.avatar);
        //this.get_takephoto();
      }
      // this.avatar = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  chooseFromAlbum() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 200,
      height: 200
    };
    this.imagePicker.getPictures(options).then(images => {
      if (images.length > 1) {
        this.presentAlert();
      } else if (images.length === 1) {
        console.log('Image URI: ' + images[0]);
        this.chooseFromAlbum_image = images[0];
        if(images[0]){
          this.avatar = images[0].slice(7);
          //alert(this.avatar);
          //this.get_chooseAlbum();
        }
        //this.avatar = images[0].slice(7);
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片哦", buttons: ["确定"]});
    alert.present().then(value => {
      return value;
    });
  }
  presentSucess() {
    let alert = this.alertCtrl.create({ title: "上传成功", buttons: ["确定"] });
    alert.present().then(value => {
      return value;
    });
  }

}
