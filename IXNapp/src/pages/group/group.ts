import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NgModule} from '@angular/core';


@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
  
export class GroupPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }


  ngOnInit() {
  }

 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  currentdateindex = 1;
  
  //BACKEND
  weeks = [1,2,3,4,5,6,7,8,9,10]
  
  //BACKEND
  names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
  
  //BACKEND
  buttons = ['button1', 'button2', 'button3', 'button4'];
  
  //BACKEND
  groupNumber = 3;
  
  descriptions= ['excellent', 'good', 'average', 'bad']; // don't change
  
  studentFeedback = [];
  
  groupFeedback = null;
  groupComment = null;
  
  nextweek() : void {
    if (this.currentdateindex < this.weeks.length-1) {
        this.currentdateindex++;
    }
  }
  
  previousweek() : void {
    if (this.currentdateindex > 0) {
        this.currentdateindex--;
    }
  }

  buttonSelected = null;
  
  buttonSelect(k) {
    this.buttonSelected = k;
  }
  
  getDescription(k) {
    return this.descriptions[k];
  }
  
  onSelect(selectedIndex: number, studentIndex: number){
    this['isStudentSelected'+studentIndex] = selectedIndex;
  }
    
  getIsStudentSelected(i) {
    return this['isStudentSelected'+i];
  }
  
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  
  public giveFeedback() {
    if (this.buttonSelected === null || this.groupComment === null) {
        this.showError ("please fill in all fields 111");
    }
    else {
        this.setButtonData();
    }
  }
  
  setButtonData(){
    this.groupFeedback = this.descriptions[this.buttonSelected]; 
    let checkData = true;
    for (let i=0; i<this.names.length; i++) {
        // if field is empty show error
        if (this['isStudentSelected'+i] === null || this['studentComment'+i] === null || this['studentContribution'+i] === null) {
            this.showError("please fill in all fields, you can fill in '-' if you don't want to enter a comment, and enter integers for the contribution");
            checkData = false;
            break;
        }
        
        else if (Number.isInteger(Number(this['studentContribution'+i])) === false) {
            this.showError("please fill in all fields, you can fill in '-' if you don't want to enter a comment, and enter integers for the contribution");
            checkData = false;
            break;
        }
        else {
            continue;
        }
    }
    if (checkData === true) {
        let added = 0;
        for (let i=0; i<this.names.length; i++) {
            added += Number(this['studentContribution'+i]);
        }
        if (added === 100) {
            this.storeData();
        }
        else {
            this.showError("the contributions must add up to 100");
        }
    }
    else if (checkData === false) {
        // do nothing
    }
  }
  
  storeData() {
    for (let i=0; i<this.names.length; i++) {
        let feedback = this.getDescription(this['isStudentSelected'+i]);
        let comment = this['studentComment'+i];
        let contribution = Number(this['studentContribution'+i]);
        this.studentFeedback.push(new Student(feedback, comment, contribution));
    }
    //BACKEND HERE - THE INFORMATION IS STORED IN THE FOLLOWING VARIABLES
    // this.groupFeedback
    // this.groupComment
    // this.studentFeedback // an array of Students with information //Student.feedback, Student.comment, Student.contribution
    
    console.log(this.studentFeedback);
  
  }
  
  getContribution(i){
    let val = this['studentContribution'+i];
    return val;
  }
  
  getComment(i){
    let val = this['studentComment'+i];
    return val;
  }
  
  toggleEvent(i) {
    if (this['studentContribution'+i] === 0) {
        this['studentContribution'+i] = null;
    }
    else {
        this['studentContribution'+i] = 0;
    }
        
  }
  
}

export class Student {
    feedback: string;
    comment: string;
    contribution: number;
 
    constructor(feedback: string, comment: string, contribution: number) {
        this.feedback = feedback
        this.comment = comment;
        this.contribution = contribution;
      }
}

