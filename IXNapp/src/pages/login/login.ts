import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AuthService } from '../../providers/auth-service';
import { ShareService } from '../../providers/share';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  userNumber: number;
  loading: Loading;
  registerCredentials = { email: null, password: null, type: null };
  
 
  constructor(private navCtrl: NavController, public shareService: ShareService, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }
 
  public login() {
    this.showLoading()   
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot(TabsControllerPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
