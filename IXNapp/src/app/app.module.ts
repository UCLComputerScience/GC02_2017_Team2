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
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { StudentHomePage } from '../pages/home-page/home-page';
import { MoreDetailsPage } from '../pages/more-details/more-details';
import { StaffContactPage } from '../pages/staff-contact/staff-contact';
import { ProfilePage } from '../pages/profile/profile';
import { MyFeedbackHistoryPage } from '../pages/my-feedback-history/my-feedback-history';

import { HttpModule } from '@angular/http';
import { AuthService } from './../providers/auth-service';
import { HouseProvider } from '../providers/house/house';

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
    FeedbackSummaryPage, 
    ProgressBarComponent,
    StudentHomePage,
    MoreDetailsPage,
    StaffContactPage,
    ProfilePage,
    MyFeedbackHistoryPage
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
    FeedbackSummaryPage,
    StudentHomePage,
    MoreDetailsPage,
    StaffContactPage,
    ProfilePage,
    MyFeedbackHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    HouseProvider
  ]
})
export class AppModule {}
