import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupListPage } from '../pages/group-list/group-list';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { StaffContactInfoPage } from '../pages/staff-contact-info/staff-contact-info';
import { LoginPage } from '../pages/login/login';
import { RedStudentsPage } from '../pages/red-students/red-students';
import { RedGroupsPage } from '../pages/red-groups/red-groups';
import { DeadlinesPage } from '../pages/deadlines/deadlines';
import { GroupPage } from '../pages/group/group';
import { FeedbackSummaryPage } from '../pages/feedback-summary/feedback-summary';

import { HttpModule } from '@angular/http';
import { StaffContakProvider } from '../providers/staff-contak/staff-contak';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupListPage,
    MyProfilePage,
    TabsControllerPage,
    StaffContactInfoPage,
    LoginPage,
    RedStudentsPage,
    RedGroupsPage,
    DeadlinesPage,
    GroupPage,
    FeedbackSummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroupListPage,
    MyProfilePage,
    TabsControllerPage,
    StaffContactInfoPage,
    LoginPage,
    RedStudentsPage,
    RedGroupsPage,
    DeadlinesPage,
    GroupPage,
    FeedbackSummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StaffContakProvider
  ]
})
export class AppModule {}
