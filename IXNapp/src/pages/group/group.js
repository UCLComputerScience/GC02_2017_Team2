var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var GroupPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function GroupPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.currentdateindex = 1;
        this.dates = ["25th of Sept to 1st of Oct 2017", "2nd of Oct to 8th of Sept 2017", "9th of Oct to 15th of Oct 2017"];
        this.weeks = ["Week 1", "Week 2", "Week 3"];
        this.names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
    }
    GroupPage.prototype.goBack = function (params) {
        if (!params)
            params = {};
        this.navCtrl.pop();
    };
    GroupPage.prototype.buttonOneClicked = function () {
        this.button1 = "highlighted";
        this.button2 = this.button3 = this.button4 = "nothighlighted";
    };
    GroupPage.prototype.buttonTwoClicked = function () {
        this.button2 = "highlighted";
        this.button1 = this.button3 = this.button4 = "nothighlighted";
    };
    GroupPage.prototype.buttonThreeClicked = function () {
        this.button3 = "highlighted";
        this.button1 = this.button2 = this.button4 = "nothighlighted";
    };
    GroupPage.prototype.buttonFourClicked = function () {
        this.button4 = "highlighted";
        this.button1 = this.button2 = this.button3 = "nothighlighted";
    };
    GroupPage.prototype.nextweek = function () {
        if (this.currentdateindex < this.weeks.length - 1) {
            this.currentdateindex++;
        }
    };
    GroupPage.prototype.previousweek = function () {
        if (this.currentdateindex > 0) {
            this.currentdateindex--;
        }
    };
    GroupPage.prototype.studentbuttonOneClicked = function (i) {
        //var myEl = ng.element( document.querySelector( '#studentbutton10' ) );
        //myEl.addClass('highlighted');
        //var myElement = angular.element( document.querySelector('a[target="studentbutton10"]') );
        //myElement.addClass('highlighted');
        //angular.element('#studentbutton10').addClass("highlighted");
        var studentbutton1 = 'studentbutton1' + i;
        var studentbutton2 = 'studentbutton2' + i;
        var studentbutton3 = 'studentbutton3' + i;
        var studentbutton4 = 'studentbutton4' + i;
        console.log(studentbutton1);
        this.studentbutton1 = "highlighted";
        this.studentbutton2 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
    };
    GroupPage.prototype.studentbuttonTwoClicked = function (i) {
        var studentbutton1 = 'studentbutton1' + i;
        var studentbutton2 = 'studentbutton2' + i;
        var studentbutton3 = 'studentbutton3' + i;
        var studentbutton4 = 'studentbutton4' + i;
        console.log(studentbutton2);
        this.studentbutton2 = "highlighted";
        this.studentbutton1 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
    };
    GroupPage.prototype.studentbuttonThreeClicked = function (i) {
        var studentbutton1 = 'studentbutton1' + i;
        var studentbutton2 = 'studentbutton2' + i;
        var studentbutton3 = 'studentbutton3' + i;
        var studentbutton4 = 'studentbutton4' + i;
        console.log(studentbutton3);
        this.studentbutton3 = "highlighted";
        this.studentbutton2 = this.studentbutton1 = this.studentbutton4 = "nothighlighted";
    };
    GroupPage.prototype.studentbuttonFourClicked = function (i) {
        var studentbutton1 = 'studentbutton1' + i;
        var studentbutton2 = 'studentbutton2' + i;
        var studentbutton3 = 'studentbutton3' + i;
        var studentbutton4 = 'studentbutton4' + i;
        console.log(studentbutton4);
        this.studentbutton4 = "highlighted";
        this.studentbutton2 = this.studentbutton3 = this.studentbutton1 = "nothighlighted";
    };
    GroupPage.prototype.getclassname = function (studentbutton, i) {
        var classname = 'studentbutton' + studentbutton + i;
        console.log("Classname= " + classname);
        return classname;
    };
    return GroupPage;
}());
GroupPage = __decorate([
    Component({
        selector: 'page-group',
        templateUrl: 'group.html'
    }),
    __metadata("design:paramtypes", [NavController])
], GroupPage);
export { GroupPage };
//# sourceMappingURL=group.js.map