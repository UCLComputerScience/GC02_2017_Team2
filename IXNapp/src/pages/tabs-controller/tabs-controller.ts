import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GroupListPage } from '../group-list/group-list';
import { StaffContactInfoPage } from '../staff-contact-info/staff-contact-info';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = GroupListPage;
  tab3Root: any = StaffContactInfoPage;
  tab4Root: any = MyProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
