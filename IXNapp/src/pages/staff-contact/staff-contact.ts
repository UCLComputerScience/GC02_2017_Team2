import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-staff-contact',
  templateUrl: 'staff-contact.html'
})
export class StaffContactPage {

  StaffContact: any[];
  TAContact: any[];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {

    this.StaffContact= [{Name: "Yun Fu", Email: "yunfu@ucl.ac.uk", Hours: "13:00", Location: "Malet Place"}];
    this.TAContact= [{Name: "John Taylor", Email: "John@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Ionic"}, {Name: "Dominic Twain", Email: "Dominic@ucl.ac.uk", Hours: "16:00", Location: "Malet Place", Exp: "Databases"}, {Name: "Ashley Shana", Email: "Ashley@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Python"}];

  }


}
