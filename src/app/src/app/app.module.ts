import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';




import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my/my';
import { LoginPage } from '../pages/login/login';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { FirstPage } from '../pages/first/first';
import { SetPwdPage}  from '../pages/set-pwd/set-pwd';
import { ResetPwdPage}  from '../pages/reset-pwd/reset-pwd';
import { XieyiPage} from '../pages/xieyi/xieyi';
import { TouxiangPage } from '../pages/touxiang/touxiang';
import { XingquPage } from '../pages/xingqu/xingqu';
import { TieziPageModule } from '../pages/tiezi/tiezi.module';

import { ShequPage } from '../pages/shequ/shequ';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TieziPage } from '../pages/tiezi/tiezi';
import { EditPage } from '../pages/edit/edit';
import { CreationPage } from '../pages/creation/creation';
import { FollowPage } from '../pages/follow/follow';
import { AccountPage } from '../pages/account/account';
import { SharePage } from '../pages/share/share';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SetupPage } from '../pages/setup/setup';
import { FansPage } from '../pages/fans/fans';
import { VideoPage } from '../pages/video/video';
import { AlbumPage } from '../pages/album/album';
import { HomepagePage } from '../pages/homepage/homepage';
import { CommunityPage } from '../pages/community/community';
import { PicturePage } from '../pages/picture/picture';
import { CameraPage } from '../pages/camera/camera';
import { FeelPage } from '../pages/feel/feel';
import { ChoosePage } from '../pages/choose/choose';
import { AuthoritPage } from '../pages/authorit/authorit';
import { VidioPage } from '../pages/vidio/vidio';
import { ArticlePage } from '../pages/article/article';
import { MessagePage } from '../pages/message/message';
import { ApiProvider } from '../providers/api/api';
import { HttpModule }from '@angular/http';
import { StorageProvider } from '../providers/storage/storage';
import { SeetouxiangPage } from '../pages/seetouxiang/seetouxiang';
import { PhotoPage } from '../pages/photo/photo';
import { TransmitPage } from '../pages/transmit/transmit';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { PhotoPageModule } from '../pages/photo/photo.module';



@NgModule({
  declarations: [
    MyApp,
    ContactPage,
   
    AboutPage,
    ContactPage,
    HomePage,
    TransmitPage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    AboutusPage,
    EditPage,
    ZhucePage,
    FirstPage,
    SetPwdPage,
    ResetPwdPage,
    XieyiPage,
    TouxiangPage,
    XingquPage,
    //TieziPage,
    AccountPage,
    AlbumPage,
    VideoPage,
    FeedbackPage,
    SharePage,
    SetupPage,
    CreationPage,
    FollowPage,
    FansPage,
    HomepagePage,
    EditPage,
    FeelPage,
    CameraPage,
    ChoosePage,
    AuthoritPage,
    PicturePage,
    VidioPage,
    ArticlePage,
    CommunityPage,
    SeetouxiangPage,
    MessagePage,
    //PhotoPageModule,
  ],
  imports: [
    BrowserModule,
   HttpModule,
   TieziPageModule,
   PhotoPageModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    },
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    ZhucePage ,
    TransmitPage,
    FirstPage,
    AboutusPage,
    SetPwdPage,
    ResetPwdPage,
    XieyiPage,
    TouxiangPage,
    XingquPage,
    TieziPage,
    AccountPage,
    AlbumPage,
    VideoPage,
    FeedbackPage,
    SharePage,
    SetupPage,
    CreationPage,
    FollowPage,
    FansPage,
    HomepagePage,
    EditPage,
    FeelPage,
    CameraPage,
    ChoosePage,
    AuthoritPage,
    PicturePage,
    VidioPage,
    ArticlePage,
    CommunityPage,
    SeetouxiangPage,
    MessagePage,
    PhotoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    StorageProvider,
  ]
})
export class AppModule {}
