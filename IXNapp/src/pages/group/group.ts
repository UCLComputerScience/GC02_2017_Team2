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
  photoarray = ['1jBNm4xWINklxipgU1Wkka17YY34x8JY4', '1S3UVJReDGZUlyWPqxdk7r908kKlk2v6z', '1luooOs5haSaSqMoSEEKBiKU6AusZ0xNR']; 



  descriptions= ['excellent', 'good', 'average', 'bad']; // don't change
  studentFeedback: any[] = [];
  groupFeedback = null;
  groupComment = null; 
  data:any = {};
  data2:any = {};
  myToggle:any ={};
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
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.names.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.groupNumber) {
        this.names.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        }
      }

      for(let j in this.Students) {
      if(!this.ultimatewkn.includes(this.Students[j].g_wk)) {
        this.ultimatewkn.push(this.Students[j].g_wk);
      }
      }

      console.log(this.ultimatewkn);

      this.weeksoccupied = this.ultimatewkn.slice();

      this.mx2 = Math.max.apply(Math, this.ultimatewkn);
      console.log(this.mx2);

    })
  }

 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  nextweek() : void {
    if (this.currentdateindex < this.weeks.length) {
        this.currentdateindex++;
    }
  }
  
  previousweek() : void {
    if (this.currentdateindex > 1) {
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
        this.showError ("please fill in all fields.");
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
        if (this['isStudentSelected'+i] === null || this['studentComment'+i] === null || this.studentContribution[i] === null) {
            this.showError("please fill in all fields, you can fill in '-' if you don't want to enter a comment, and enter integers for the contribution");
            checkData = false;
            break;
        }
        
        else if (Number.isInteger(Number(this.studentContribution[i])) === false) {
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
      if(!this.weeksoccupied.includes(String(this.currentdateindex))) {
        let added = 0;
        for (let i=0; i<this.names.length; i++) {
            added += Number(this.studentContribution[i]);
        }
        if (added === 100) {
            this.storeData();
        }
        else {
            this.showError("the contributions must add up to 100");
        }
        } else {
          this.showError("This week's feedback already exists");
        }
    }
    else if (checkData === false) {
        // do nothing
    }
  }
  
  storeData() {

    var studentFeedback: any[] = [];

    for (let i=0; i<this.names.length; i++) {
        let feedback: any = this.getDescription(this['isStudentSelected'+i]);

        if(feedback == 'bad') {
          feedback = 1;
        }
        if(feedback == 'average') {
          feedback = 2;
        }
        if(feedback == 'good') {
          feedback = 3;
        }
        if(feedback == 'excellent') {
          feedback = 4;
        }

        let comment: string = this['studentComment'+i];
        let contribution = Number(this.studentContribution[i]);
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
    let val = this.studentContribution[i];
    return val;
  }
  
  getComment(i){
    let val = this['studentComment'+i];
    return val;
  }

  toggleEvent(i) {
    console.log(this.absentToggle[i]); 
    if (this.studentContribution[i] === 0) {
        this.studentContribution[i] = 1;
    }
    else {
        this.studentContribution[i] = 0;
    }
        
  }
  
  //this section is and handles the toggle button function, set the corresponding to true or false 
  notify(i){
    this.myToggle[i]= true; 
    console.log(this.myToggle[0]); 
    console.log(this.myToggle[1]); 
    console.log(this.myToggle[2]); 
  }

  photocompiler(i){
    var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]); 
    return photoname; 
   } 
  
  absentToggle:boolean[] = [false, true, false];
  studentContribution: any[] = [3,4,5];
}


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
