import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  firstName = '';
  lastName = '';
  email = '';
  type = '';
  
  constructor(private app: App, public navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.firstName = info['firstName'];
    this.lastName = info['lastName'];
    this.email = info['email'];
    this.type = info['type'];
  }
  
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  
  items = ['G1', 'G3', 'G8'];
  
}
