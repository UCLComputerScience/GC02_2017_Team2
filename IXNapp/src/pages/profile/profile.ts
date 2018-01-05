import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  firstName = '';
  lastName = '';
  email = '';
  type = '';
  password;
  Students: any[] = [];
  data: any = {};
  SID: number;

  //BACKEND FOR STUDENT GROUP AND GROUP DESCRIPTION
  //myGroup = 'G3';
  //groupDescription = 'my Group Description';

  myGroup: string;
  groupDescription: string;
  
  constructor(private app: App, public navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, public house: HouseProvider, public http: Http) {
    let info = this.auth.getUserInfo();
    this.firstName = info['firstName'];
    this.lastName = info['lastName'];
    this.email = info['email'];
    this.type = info['type'];
  }

  ngOnInit() {
    this.house.getProfileStu().subscribe(dt => {
      this.Students = JSON.parse(dt["_body"]);

      this.myGroup = "G".concat(this.Students[0].g_id);
      this.groupDescription = this.Students[0].pro;
      this.SID = this.Students[0].s_id;

      console.log(this.myGroup);
      console.log(this.groupDescription);
      })
  }
  
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  
  changePassword() {
    if (this.password === null || this.password == null) {
        this.showError("No password inserted");
    }
    else if (this.password !== null) {
        if (this.password.length < 6) {
            this.showError("Please choose a password that is at least 6 characters long");
        }
        else {
            // BACKEND HERE TO SAVE PASSWORD

            var link14 = 'http://gc02team02app.azurewebsites.net/SQL/ProfileSSet.php';
            var myData14 =  JSON.stringify({s: this.SID, p: this.password})

            this.http.post(link14, myData14).subscribe(data => {
            this.data.response = data["_body"];
            }, error => {
            console.log("Oooops!");
            });

            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'Your password was changed',
              buttons: ['OK']
            });
            alert.present(prompt);
            this.password = null;
        }
    }
    
  }
  

}
