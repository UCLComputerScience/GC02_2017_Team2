import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { StaffContakProvider } from '../../providers/staff-contak/staff-contak';


@Component({
  selector: 'page-staff-contact-info',
  templateUrl: 'staff-contact-info.html'

})
export class StaffContactInfoPage {

StaffContact: any[];
TAContact: any[];

  constructor(public navCtrl: NavController, public staffcontakprovider: StaffContakProvider) {
    this.getStaffCon();
  }

getStaffCon() {
  this.staffcontakprovider.getStaffCon().subscribe(data => this.TAContact = data);
}

  


ngOnInit() {
	
	this.StaffContact= [{"Name": "Yun Fu", "Email": "yunfu@ucl.ac.uk", "Hours": "13:00", "Location": "Malet Place"}];

	}


}
