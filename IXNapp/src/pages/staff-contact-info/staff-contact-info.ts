import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-staff-contact-info',
  templateUrl: 'staff-contact-info.html'
})
export class StaffContactInfoPage {

StaffContact: any[];
TAContact: any[];

  constructor(public navCtrl: NavController) {
  }
  
ngOnInit() {
	
	this.StaffContact= [{Name: "Yun Fu", Email: "yunfu@ucl.ac.uk", Hours: "13:00", Location: "Malet Place"}];

	this.TAContact= [{Name: "John Taylor", Email: "John@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Ionic", Pic: "assets/img/TA3.png"}, {Name: "Dominic Twain", Email: "Dominic@ucl.ac.uk", Hours: "16:00", Location: "Malet Place", Exp: "Databases", Pic: "assets/img/TA2.png"}, {Name: "Ashley Shana", Email: "Ashley@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Python", Pic: "assets/img/TA1.png"}];

}

}
