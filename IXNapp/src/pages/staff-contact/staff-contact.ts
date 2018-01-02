import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';

@Component({
  selector: 'page-staff-contact',
  templateUrl: 'staff-contact.html'
})
export class StaffContactPage {

  StaffContact: any[];
  TAContact: any[];

  constructor(public navCtrl: NavController, public house: HouseProvider) {
  this.house.getStaffCon().subscribe(data => this.TAContact = data);
  }

  ngOnInit() {

    this.StaffContact= [{Name: "Yun Fu", Email: "yunfu@ucl.ac.uk", Hours: "13:00", Location: "Malet Place"}];

  }


}
