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
    this.house.GetGroupCon().subscribe(dt => {
      this.GContact = JSON.parse(dt["_body"]);

      })

      this.house.GetSuper().subscribe(dt2 => {
      this.SContact = JSON.parse(dt2["_body"]);
      })
  }
}
