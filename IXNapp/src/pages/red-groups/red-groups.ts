import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-red-groups',
  templateUrl: 'red-groups.html'
})
export class RedGroupsPage implements OnInit {

RedWeeks: any[];
RedGroups: string[];

  constructor(public navCtrl: NavController) {
  }
  
ngOnInit() {
	
	this.RedGroups = ["G1", "G2", "G3", "G4"];
}

onClick() {
	this.RedWeeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
}

}
