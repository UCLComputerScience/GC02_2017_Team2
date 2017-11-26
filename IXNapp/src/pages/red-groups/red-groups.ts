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
	this.RedWeeks = [{Week: "Week 1", Color: 4}, {Week: "Week 2", Color: 1}, {Week: "Week 3", Color: 1}, {Week: "Week 4", Color: 2}, {Week: "Week 5", Color: 1}];
	for(let i = 0; i < this.RedWeeks.length; i++){
		if(this.RedWeeks[i].Color == 4){
			this.RedWeeks[i].Color = "dark";
		} else if(this.RedWeeks[i].Color == 3){
			this.RedWeeks[i].Color = "light";
		} else if(this.RedWeeks[i].Color == 2){
			this.RedWeeks[i].Color = "secondary";
		} else if(this.RedWeeks[i].Color == 1){
			this.RedWeeks[i].Color = "danger";
		}
	}
}

}
