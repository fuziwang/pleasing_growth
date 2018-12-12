import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelPage } from '../feel/feel';
import { PicturePage } from '../picture/picture';
import { VidioPage } from '../vidio/vidio';
import { ArticlePage } from '../article/article';
import { App } from 'ionic-angular';

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
    this.navCtrl.push(PicturePage);
  }
  goVidio(){
   this.navCtrl.push(VidioPage);
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
} 
