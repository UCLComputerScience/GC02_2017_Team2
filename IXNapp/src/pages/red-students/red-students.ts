import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-red-students',
  templateUrl: 'red-students.html'
})

export class RedStudentsPage implements OnInit {

RedWeeks: any[];
RedStudents: String[];
	

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {

	this.RedStudents = ["Gary Johnson", "Abigail Taylor", "Tony Whatever"];
}

onClick() {
	this.RedWeeks = [ {Week: "Week 1", Contr: "30%"}, {Week: "Week 2", Contr: "29%"}, {Week: "Week 3", Contr: "33%"}];
}

}
