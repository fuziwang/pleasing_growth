import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelPage } from '../feel/feel';
import { PicturePage } from '../picture/picture';
import { VidioPage } from '../vidio/vidio';
import { ArticlePage } from '../article/article';
import { App } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  constructor(public navCtrl: NavController,private app:App) {

  }
 goSub(){
    this.navCtrl.push(FeelPage);
  }
  goPicture(){
    this.navCtrl.push(AlbumPage);
  }
  goVidio(){
   this.navCtrl.push(VideoPage);
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }

  close() {
    this.navCtrl.pop();
  }
} 
