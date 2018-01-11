import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { NgModule} from '@angular/core';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
  
export class GroupPage implements OnInit {

  currentdateindex: any = 1;
  
  weeks = [1,2,3,4,5,6,7,8,9,10]
  weeksoccupied: any[] = [];
  buttons = ['button1', 'button2', 'button3', 'button4'];
  groupNumber: number; 
  photoarray: any[] = [];


  descriptions= ['excellent', 'good', 'average', 'bad']; // don't change
  studentFeedback: any[] = [];
  groupFeedback = null;
  groupComment = null; 
  data:any = {};
  data2:any = {};
  myToggle: boolean[] = [];
  Students: any[] = [];
  names: any[] = [];
  str: string;
  str2: string;
  ultimatewkn: number[] = [];
  mx2: number;
  StudentIDs: any[] = [];



  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public nav : NavParams, public house: HouseProvider, public http: Http, public http2: Http) {
    this.groupNumber = this.nav.get('param1');
  }


  ngOnInit() {
    this.house.GetStage2Student().subscribe(dt => {
      this.Students = JSON.parse(dt["_body"]);

      console.log(this.Students);

      for(let i in this.Students) {
      this.myToggle[i] = false;
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.names.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.groupNumber) {
        this.names.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        this.photoarray.push(this.Students[i].photo);
        }
      }

      for(let j in this.Students) {
      if(!this.ultimatewkn.includes(this.Students[j].g_wk) && this.Students[j].g_ID == this.groupNumber) {
        this.ultimatewkn.push(this.Students[j].g_wk);
      }
      }

      console.log(this.ultimatewkn);

      this.weeksoccupied = this.ultimatewkn.slice();

      this.mx2 = Math.max.apply(Math, this.ultimatewkn);
      console.log(this.mx2);

    })
    
  }
// back button
 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  // go to next week by clicking on button
  nextweek() : void {
    if (this.currentdateindex < this.weeks.length) {
        this.currentdateindex++;
    }
  }
  
  // go to previous week through button
  previousweek() : void {
    if (this.currentdateindex > 1) {
        this.currentdateindex--;
    }
  }

 // keep track of selected buttons
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
  
  // check if group fields are filled in
  public giveFeedback() {
    if (this.buttonSelected === null || this.groupComment === null) {
        this.showError ("please fill in all fields.");
    }
    else {
        this.setButtonData();
    }
  }
  //checks if all fields are filled in, that contributions add up. If there are no issues, it stores the data to be saved in variables
  setButtonData(){
    this.groupFeedback = this.descriptions[this.buttonSelected]; 
    let checkData = true;
    for (let i=0; i<this.names.length; i++) {
        if (this.myToggle[i] === true) {
            continue;
        }
        // if field is empty show error
        else if (this['isStudentSelected'+i] === null || this['studentComment'+i] === null || this['studentContribution'+i] === null) {
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
      console.log(this.weeksoccupied);
      console.log(this.currentdateindex);
      let allAbsent = true;
      if(!this.weeksoccupied.includes(String(this.currentdateindex))) {
        let added = 0;
        for (let i=0; i<this.names.length; i++) {
            if (this.myToggle[i] === true) {
                added += Number(0);
            }
            else {
                added += Number(this['studentContribution'+i]);
                allAbsent = false;
            }
        }
        if (added === 100 || allAbsent === true) {
            this.storeData();
        }
        else {
            this.showError("the contributions must add up to 100, notice that if a student is marked as absent the contribution is recorded as 0");
        }
        } else {
          this.showError("This week's feedback already exists");
        }
    }
    else if (checkData === false) {
        // do nothing
    }
  }
  
  // store data prepares variables for backend and pushes it to the database
  storeData() {

    var studentFeedback: any[] = [];

    for (let i=0; i<this.names.length; i++) {
        let feedback: any = this.getDescription(this['isStudentSelected'+i]);
        let contribution;
        let comment: string;
        
        if (this.myToggle[i] === true) {
            feedback = 0
        }
        else if(feedback === 'bad') {
          feedback = 1;
        }
        else if(feedback === 'average') {
          feedback = 2;
        }
        else if(feedback === 'good') {
          feedback = 3;
        }
        else if(feedback === 'excellent') {
          feedback = 4;
        }
        
        if (this.myToggle[i] === true) {
            contribution = 0;
            comment = "-";
        }
        else {
            contribution = Number(this['studentContribution'+i]);
            comment = this['studentComment'+i];
        }
        let stuID = this.StudentIDs[i];
        studentFeedback.push(new Student(feedback, comment, contribution, stuID));
    }
    //BACKEND HERE - THE INFORMATION IS STORED IN THE FOLLOWING VARIABLES
    // this.groupFeedback
    // this.groupComment
    // this.studentFeedback // an array of Students with information //Student.feedback, Student.comment, Student.contribution


    for(let u in studentFeedback) {

    var link = 'http://gc02team02app.azurewebsites.net/SQL/AddFeed.php';
    var myData = JSON.stringify({sfeed: studentFeedback[u].feedback, scomment: studentFeedback[u].comment, contr: parseInt(studentFeedback[u].contribution), week: this.currentdateindex, stuID: parseInt(studentFeedback[u].stuID)})

    this.http.post(link, myData).subscribe(data => {
    this.data.response = data["_body"];
    }, error => {
    console.log("Oooops!");
    });

    }

    if(this.groupFeedback == 'bad') {
          this.groupFeedback = 1;
        }
        if(this.groupFeedback == 'average') {
          this.groupFeedback = 2;
        }
        if(this.groupFeedback == 'good') {
          this.groupFeedback = 3;
        }
        if(this.groupFeedback == 'excellent') {
          this.groupFeedback = 4;
        }

        console.log(this.currentdateindex);

    var link1 = 'http://gc02team02app.azurewebsites.net/SQL/AddFeedG.php';
    var myData1 = JSON.stringify({gID: this.groupNumber, gcomment: this.groupComment, gfeed: this.groupFeedback, week: parseInt(this.currentdateindex)})

    this.http2.post(link1, myData1).subscribe(data2 => {
    this.data2.response = data2["_body"];
    console.log(data2);
    }, error => {
    console.log("Oooops!");
    })

    this.navCtrl.pop();
    
  }

  
  getContribution(i){
    let val = this['studentContribution'+i];
    return val;
  }
  
  getComment(i){
    let val = this['studentComment'+i];
    return val;
  }
  
  //this section is and handles the toggle button function, set the corresponding to true or false 
  
  notify(i){
    console.log("toggle: " + this.myToggle);
    if (this.myToggle[i] === true) {
        this.myToggle[i]= false;
    }
    else if (this.myToggle[i] === false) {
        this.myToggle[i]= true;
        let alert = this.alertCtrl.create({
          title: 'Warning',
          subTitle: "marking a student as absent will set their contribution and feedback to 0 and the comment to '-'",
          buttons: ['OK']
        });
        alert.present(prompt);
    }
    console.log("toggle2: " + this.myToggle);
    
  }

  photocompiler(i){
    var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]); 
    return photoname; 
   } 

}

// class to store student feedback
export class Student {
    feedback: string;
    comment: string;
    contribution: number;
    stuID: number;
 
    constructor(feedback: string, comment: string, contribution: number, stuID: number) {
        this.feedback = feedback
        this.comment = comment;
        this.contribution = contribution;
        this.stuID = stuID;
      }
}
