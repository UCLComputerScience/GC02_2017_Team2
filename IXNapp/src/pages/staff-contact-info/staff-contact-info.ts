import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-staff-contact-info',
  templateUrl: 'staff-contact-info.html'

})
export class StaffContactInfoPage {

GContact: any[] = [];
SContact: any[] = [];


  constructor(public navCtrl: NavController, public house: HouseProvider) {
    this.house.GetGroupCon2().subscribe(dt => {
      this.GContact = JSON.parse(dt["_body"]);

      for(let i in this.GContact) {
      this.GContact[i].pic = "https://docs.google.com/uc?id=".concat(this.GContact[i].pic);
      }

      this.GContact.sort(function(a,b) { 
      return a.g_id - b.g_id
      })
      

      console.log(this.GContact);
      })

      this.house.GetSuper2().subscribe(dt2 => {
      this.SContact = JSON.parse(dt2["_body"]);
      })
  }
}
