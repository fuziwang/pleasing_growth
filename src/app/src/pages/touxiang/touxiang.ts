import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, AlertController } from 'ionic-angular';
import { XingquPage } from '../xingqu/xingqu';
import { StorageProvider } from '../../providers/storage/storage';
import { SeetouxiangPage } from '../seetouxiang/seetouxiang';

//import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
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
  takephoto_image = "../../assets/imgs/jiahao1.png";
  chooseFromAlbum_image;
  uid=this.storage.getItem('uid');

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider,public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, private camera: Camera,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouxiangPage');
    
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
      console.log(data);
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
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: 2
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      let base64Image = 'data:image/jpeg;base64,' + image;
      this.takephoto_image = base64Image;
      if(image){
        //alert(image);
        // alert(this.avatar);
        this.get_takephoto();
      }
      // this.avatar = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  chooseFromAlbum() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0
    };

    this.camera.getPicture(options).then(image => {
      let base64Image = 'data:image/jpeg;base64,' + image;
      this.takephoto_image = base64Image;
      if (image) {
        //alert(image);
        // alert(this.avatar);
        this.get_takephoto();
      }
    }, error => {
      alert(error);
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
