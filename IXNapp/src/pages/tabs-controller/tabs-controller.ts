import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GroupListPage } from '../group-list/group-list';
import { StaffContactInfoPage } from '../staff-contact-info/staff-contact-info';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
import { StudentHomePage } from '../home-page/home-page';
import { StaffContactPage } from '../staff-contact/staff-contact';
import { ProfilePage } from '../profile/profile';
import { MyFeedbackHistoryPage } from '../my-feedback-history/my-feedback-history';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  type: String;
  
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  
  constructor( public navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.type = info['type'];
    console.log("constructor");
    this.newvalue();
  }
  
  
  // sets the root of tabs depending on user type
  newvalue() {
    if (this.type === "Student") {
        this.tab1Root = StudentHomePage;
        this.tab2Root = MyFeedbackHistoryPage;
        this.tab3Root = StaffContactPage;
        this.tab4Root = ProfilePage;
    }
    else if (this.type === "TA" || this.type === "Lecturer") {
        this.tab1Root = HomePage;
        this.tab2Root = GroupListPage;
        this.tab3Root = StaffContactInfoPage;
        this.tab4Root = MyProfilePage;
    }
  }
  
}
