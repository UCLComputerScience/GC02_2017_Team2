import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'page-red-students',
  templateUrl: 'red-students.html'

})

export class RedStudentsPage implements OnInit {

RedWeeks: any[];
RedStudents: String[];
Contribution: String[];
Clicked: string;
	

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {

	this.RedStudents = ["Gary Johnson", "Abigail Taylor", "Tony Whatever", "Gideon Hacquah", ];
}

onClick() {
	this.RedWeeks = [ {Week: "Week 1", Color: 2, Contr: "30%"}, {Week: "Week 2", Color: 3, Contr: "29%"}, {Week: "Week 3", Color: 1, Contr: "33%"}];
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
	this.Contribution = ["Contribution"];
}



}
