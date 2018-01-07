webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeadlinesPage = (function () {
    //dateString= "2017-10-06"; //Backend: String in database should be like this 
    function DeadlinesPage(navCtrl, house) {
        this.navCtrl = navCtrl;
        this.house = house;
        this.Deadlinetitles = [];
        this.Deadlineraw = [];
    }
    DeadlinesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getDead().subscribe(function (dt) {
            _this.Deadlineraw = dt;
            _this.Deadlineraw.sort(function (a, b) {
                var aa = a.deadd.split('/').reverse().join();
                var bb = b.deadd.split('/').reverse().join();
                return aa < bb ? -1 : (aa > bb ? 1 : 0);
            });
            var today = new Date();
            var d = today.getDate();
            var m = today.getMonth() + 1;
            var y = today.getFullYear();
            var dd = d + '/' + m + '/' + y;
            var parts = dd.split("/");
            var z = new Date(parseInt(parts[2]), (parseInt(parts[1]) - 1), parseInt(parts[0]));
            for (var i in _this.Deadlineraw) {
                var t = _this.Deadlineraw[i].deadd.split("/");
                var w = new Date(parseInt(t[2]), (parseInt(t[1]) - 1), parseInt(t[0]));
                if (z < w) {
                    _this.Deadlinetitles.push(_this.Deadlineraw[i]);
                }
            }
            for (var j in _this.Deadlineraw) {
                if (_this.Deadlineraw[j].deadt == 'Start Date') {
                    _this.dateString = _this.Deadlineraw[j].deadd;
                }
            }
        });
    };
    DeadlinesPage.prototype.CurrentWeek = function () {
        var start = new Date(this.dateString);
        var today = new Date();
        var diff = (today.getTime() - start.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        var diyy = Math.abs(Math.floor(diff)) + 1;
        if (diyy > 10) {
            return 'holidays';
        }
        else {
            var weekcounter = 'Week ' + String(diyy);
            return weekcounter;
        }
    };
    return DeadlinesPage;
}());
DeadlinesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1>Currently in {{CurrentWeek()}}</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="spacer" style="height:20px;"></div>\n  </ion-item>\n  <ion-item *ngFor="let DL of Deadlinetitles">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n         {{DL.deadt}}\n        </ion-col>\n        <ion-col>\n          {{DL.deadd}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */]])
], DeadlinesPage);

//# sourceMappingURL=deadlines.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* unused harmony export Student */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupPage = (function () {
    function GroupPage(navCtrl, alertCtrl, nav, house, http, http2) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.house = house;
        this.http = http;
        this.http2 = http2;
        this.currentdateindex = 1;
        this.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.weeksoccupied = [];
        this.buttons = ['button1', 'button2', 'button3', 'button4'];
        this.photoarray = [];
        this.descriptions = ['excellent', 'good', 'average', 'bad']; // don't change
        this.studentFeedback = [];
        this.groupFeedback = null;
        this.groupComment = null;
        this.data = {};
        this.data2 = {};
        this.myToggle = [];
        this.Students = [];
        this.names = [];
        this.ultimatewkn = [];
        this.StudentIDs = [];
        this.buttonSelected = null;
        this.groupNumber = this.nav.get('param1');
    }
    GroupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.GetStage2Student().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            console.log(_this.Students);
            for (var i in _this.Students) {
                _this.myToggle[i] = false;
                _this.str = _this.Students[i].fname;
                _this.str2 = _this.Students[i].lname;
                if (!_this.names.includes(_this.str.concat(" ", _this.str2)) && _this.Students[i].g_ID == _this.groupNumber) {
                    _this.names.push(_this.str.concat(" ", _this.str2));
                    _this.StudentIDs.push(_this.Students[i].s_ID);
                    _this.photoarray.push(_this.Students[i].photo);
                }
            }
            for (var j in _this.Students) {
                if (!_this.ultimatewkn.includes(_this.Students[j].g_wk) && _this.Students[j].g_ID == _this.groupNumber) {
                    _this.ultimatewkn.push(_this.Students[j].g_wk);
                }
            }
            console.log(_this.ultimatewkn);
            _this.weeksoccupied = _this.ultimatewkn.slice();
            _this.mx2 = Math.max.apply(Math, _this.ultimatewkn);
            console.log(_this.mx2);
        });
    };
    GroupPage.prototype.goBack = function (params) {
        if (!params)
            params = {};
        this.navCtrl.pop();
    };
    GroupPage.prototype.nextweek = function () {
        if (this.currentdateindex < this.weeks.length) {
            this.currentdateindex++;
        }
    };
    GroupPage.prototype.previousweek = function () {
        if (this.currentdateindex > 1) {
            this.currentdateindex--;
        }
    };
    GroupPage.prototype.buttonSelect = function (k) {
        this.buttonSelected = k;
    };
    GroupPage.prototype.getDescription = function (k) {
        return this.descriptions[k];
    };
    GroupPage.prototype.onSelect = function (selectedIndex, studentIndex) {
        this['isStudentSelected' + studentIndex] = selectedIndex;
    };
    GroupPage.prototype.getIsStudentSelected = function (i) {
        return this['isStudentSelected' + i];
    };
    GroupPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    GroupPage.prototype.giveFeedback = function () {
        if (this.buttonSelected === null || this.groupComment === null) {
            this.showError("please fill in all fields.");
        }
        else {
            this.setButtonData();
        }
    };
    GroupPage.prototype.setButtonData = function () {
        this.groupFeedback = this.descriptions[this.buttonSelected];
        var checkData = true;
        for (var i = 0; i < this.names.length; i++) {
            if (this.myToggle[i] === true) {
                continue;
            }
            else if (this['isStudentSelected' + i] === null || this['studentComment' + i] === null || this['studentContribution' + i] === null) {
                this.showError("please fill in all fields, you can fill in '-' if you don't want to enter a comment, and enter integers for the contribution");
                checkData = false;
                break;
            }
            else if (Number.isInteger(Number(this['studentContribution' + i])) === false) {
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
            var allAbsent = true;
            if (!this.weeksoccupied.includes(String(this.currentdateindex))) {
                var added = 0;
                for (var i = 0; i < this.names.length; i++) {
                    if (this.myToggle[i] === true) {
                        added += Number(0);
                    }
                    else {
                        added += Number(this['studentContribution' + i]);
                        allAbsent = false;
                    }
                }
                if (added === 100 || allAbsent === true) {
                    this.storeData();
                }
                else {
                    this.showError("the contributions must add up to 100, notice that if a student is marked as absent the contribution is recorded as 0");
                }
            }
            else {
                this.showError("This week's feedback already exists");
            }
        }
        else if (checkData === false) {
            // do nothing
        }
    };
    GroupPage.prototype.storeData = function () {
        var _this = this;
        var studentFeedback = [];
        for (var i = 0; i < this.names.length; i++) {
            var feedback = this.getDescription(this['isStudentSelected' + i]);
            var contribution = void 0;
            var comment = void 0;
            if (this.myToggle[i] === true) {
                feedback = 0;
            }
            else if (feedback === 'bad') {
                feedback = 1;
            }
            else if (feedback === 'average') {
                feedback = 2;
            }
            else if (feedback === 'good') {
                feedback = 3;
            }
            else if (feedback === 'excellent') {
                feedback = 4;
            }
            if (this.myToggle[i] === true) {
                contribution = 0;
                comment = "-";
            }
            else {
                contribution = Number(this['studentContribution' + i]);
                comment = this['studentComment' + i];
            }
            var stuID = this.StudentIDs[i];
            studentFeedback.push(new Student(feedback, comment, contribution, stuID));
        }
        //BACKEND HERE - THE INFORMATION IS STORED IN THE FOLLOWING VARIABLES
        // this.groupFeedback
        // this.groupComment
        // this.studentFeedback // an array of Students with information //Student.feedback, Student.comment, Student.contribution
        for (var u in studentFeedback) {
            var link = 'http://gc02team02app.azurewebsites.net/SQL/AddFeed.php';
            var myData = JSON.stringify({ sfeed: studentFeedback[u].feedback, scomment: studentFeedback[u].comment, contr: parseInt(studentFeedback[u].contribution), week: this.currentdateindex, stuID: parseInt(studentFeedback[u].stuID) });
            this.http.post(link, myData).subscribe(function (data) {
                _this.data.response = data["_body"];
            }, function (error) {
                console.log("Oooops!");
            });
        }
        if (this.groupFeedback == 'bad') {
            this.groupFeedback = 1;
        }
        if (this.groupFeedback == 'average') {
            this.groupFeedback = 2;
        }
        if (this.groupFeedback == 'good') {
            this.groupFeedback = 3;
        }
        if (this.groupFeedback == 'excellent') {
            this.groupFeedback = 4;
        }
        console.log(this.currentdateindex);
        var link1 = 'http://gc02team02app.azurewebsites.net/SQL/AddFeedG.php';
        var myData1 = JSON.stringify({ gID: this.groupNumber, gcomment: this.groupComment, gfeed: this.groupFeedback, week: parseInt(this.currentdateindex) });
        this.http2.post(link1, myData1).subscribe(function (data2) {
            _this.data2.response = data2["_body"];
            console.log(data2);
        }, function (error) {
            console.log("Oooops!");
        });
        this.navCtrl.pop();
    };
    GroupPage.prototype.getContribution = function (i) {
        var val = this['studentContribution' + i];
        return val;
    };
    GroupPage.prototype.getComment = function (i) {
        var val = this['studentComment' + i];
        return val;
    };
    //this section is and handles the toggle button function, set the corresponding to true or false 
    GroupPage.prototype.notify = function (i) {
        console.log("toggle: " + this.myToggle);
        if (this.myToggle[i] === true) {
            this.myToggle[i] = false;
        }
        else if (this.myToggle[i] === false) {
            this.myToggle[i] = true;
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                subTitle: "marking a student as absent will set their contribution and feedback to 0 and the comment to '-'",
                buttons: ['OK']
            });
            alert_1.present(prompt);
        }
        console.log("toggle2: " + this.myToggle);
    };
    GroupPage.prototype.photocompiler = function (i) {
        var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]);
        return photoname;
    };
    return GroupPage;
}());
GroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group {{groupNumber}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button type="submit" form="feedbackForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div id="weekcontrol">\n    <button class="datebar" id="group-button18" ion-button clear color="positive" (click)="previousweek()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <p class="datebar" id="date">\n      <b>Week {{([currentdateindex])}}</b>\n    </p>\n    <button class="datebar" id="group-button19" ion-button clear color="positive" (click)="nextweek()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="groupperformance">\n    <button *ngFor="let button of buttons; let k = index; " class="performancebutton {{ button }}" [class.highlighted]="k === buttonSelected" (click)="buttonSelect(k)">\n      {{this.getDescription(k)}}\n    </button>\n  </div>\n  <h6 id="group-heading5" style="color:#000000;">\n    Comments\n  </h6>\n  <form (ngSubmit)="giveFeedback()" id="feedbackForm">\n    <ion-item text-wrap lines id="group-input7">\n      <ion-textarea rows=2 type="text" placeholder="Click to input" [(ngModel)]="this.groupComment" name="groupComment"></ion-textarea>\n    </ion-item>\n      <h5>Student Performance</h5>\n      <ion-list *ngFor="let name of names; let i = index; ">\n        <ion-card>\n          <div>\n            <ion-item text-wrap color="none" id="group-list-item39">\n              <ion-avatar item-left>\n                <img src="{{ photocompiler(i) }}" style="height: 12vh; width: 22vw;">\n              </ion-avatar>\n              <p id="name">\n                {{name}}\n              </p>\n            </ion-item>\n            <div>\n              <button type="button" *ngFor="let button of buttons; let j = index; " class="studentbutton {{button}}" [class.highlighted]="j === getIsStudentSelected(i)" (click)="onSelect(j, i)"></button>\n              <ion-input placeholder="contr." id="contribution" [(ngModel)]="this[\'studentContribution\'+i]" name="studentContribution" value=""></ion-input>\n            </div>\n            <ion-item lines>\n              <ion-input [(ngModel)]="this[\'studentComment\'+i]" name="studentComment" type="text" placeholder="Click to input comment"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="toggleitem">\n              <ion-label id="label">Absent:</ion-label>\n              <ion-toggle (ionChange)="notify(i)"></ion-toggle>\n            </ion-item>\n          </div>\n        </ion-card>\n      </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], GroupPage);

var Student = (function () {
    function Student(feedback, comment, contribution, stuID) {
        this.feedback = feedback;
        this.comment = comment;
        this.contribution = contribution;
        this.stuID = stuID;
    }
    return Student;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HouseProvider = (function () {
    function HouseProvider(http, http2, http3, http4, http5, http6, http7, http8, http9, http10, http11, http12, http13, http14, http15, http16) {
        this.http = http;
        this.http2 = http2;
        this.http3 = http3;
        this.http4 = http4;
        this.http5 = http5;
        this.http6 = http6;
        this.http7 = http7;
        this.http8 = http8;
        this.http9 = http9;
        this.http10 = http10;
        this.http11 = http11;
        this.http12 = http12;
        this.http13 = http13;
        this.http14 = http14;
        this.http15 = http15;
        this.http16 = http16;
        console.log('Hello HouseProvider Provider');
    }
    HouseProvider.prototype.getAllRedStudent = function () {
        var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
        var myData1 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http.post(link1, myData1);
    };
    HouseProvider.prototype.getAllRedTeam = function () {
        var link2 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php';
        var myData2 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http2.post(link2, myData2);
    };
    HouseProvider.prototype.GetStage2Student = function () {
        var link3 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentPrelim.php';
        var myData3 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http3.post(link3, myData3);
    };
    HouseProvider.prototype.getStaffCon = function () {
        return this.http4.get('http://gc02team02app.azurewebsites.net/SQL/Staff%20Contact.php').do(function (res) { return console.log(res); }).map(function (res) { return res.json(); });
    };
    HouseProvider.prototype.GetStudentAdd = function () {
        var link4 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentAdd.php';
        var myData4 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http5.post(link4, myData4);
    };
    HouseProvider.prototype.GetStudentHome = function () {
        var link5 = 'http://gc02team02app.azurewebsites.net/SQL/StudentHome.php';
        var myData5 = JSON.stringify({ studID: this.SID });
        return this.http6.post(link5, myData5);
    };
    HouseProvider.prototype.MoreDets = function () {
        var link6 = 'http://gc02team02app.azurewebsites.net/SQL/MoreDets.php';
        var myData6 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http7.post(link6, myData6);
    };
    HouseProvider.prototype.MoreDetsS = function () {
        var link7 = 'http://gc02team02app.azurewebsites.net/SQL/MoreDetsS.php';
        var myData7 = JSON.stringify({ studID: this.SID });
        return this.http8.post(link7, myData7);
    };
    HouseProvider.prototype.GetGroupCon = function () {
        var link8 = 'http://gc02team02app.azurewebsites.net/SQL/Group%20Contact.php';
        var myData8 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http9.post(link8, myData8);
    };
    HouseProvider.prototype.GetSuper = function () {
        var link9 = 'http://gc02team02app.azurewebsites.net/SQL/Supervisor%20Contact.php';
        var myData9 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http10.post(link9, myData9);
    };
    HouseProvider.prototype.GetSuper2 = function () {
        var link10 = 'http://gc02team02app.azurewebsites.net/SQL/Supervisor%20Contact2.php';
        var myData10 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http12.post(link10, myData10);
    };
    HouseProvider.prototype.GetGroupCon2 = function () {
        var link11 = 'http://gc02team02app.azurewebsites.net/SQL/SC.php';
        var myData11 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http13.post(link11, myData11);
    };
    HouseProvider.prototype.getDead = function () {
        return this.http11.get('http://gc02team02app.azurewebsites.net/SQL/Deadline.php').do(function (res) { return console.log(res); }).map(function (res) { return res.json(); });
    };
    HouseProvider.prototype.getProfileStaff = function () {
        var link12 = 'http://gc02team02app.azurewebsites.net/SQL/ProfileStaGet.php';
        var myData12 = JSON.stringify({ teachID: this.TAID, lect: this.Lect });
        return this.http14.post(link12, myData12);
    };
    HouseProvider.prototype.getProfileStu = function () {
        var link13 = 'http://gc02team02app.azurewebsites.net/SQL/ProfileSGet.php';
        var myData13 = JSON.stringify({ studID: this.SID });
        return this.http15.post(link13, myData13);
    };
    HouseProvider.prototype.PassPrelim = function (pass) {
        var a = pass;
        var link14 = 'http://gc02team02app.azurewebsites.net/SQL/ProfileStaSet.php';
        var myData14 = JSON.stringify({ teachID: this.TAID, p: a });
        console.log(myData14);
        return this.http16.post(link14, myData14);
    };
    HouseProvider.prototype.setSID = function (userID) {
        this.SID = userID;
    };
    HouseProvider.prototype.setTAID = function (userID) {
        this.TAID = userID;
    };
    HouseProvider.prototype.setLect = function (userID) {
        this.Lect = userID;
    };
    return HouseProvider;
}());
HouseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], HouseProvider);

//# sourceMappingURL=house.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_contact_staff_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_feedback_history_my_feedback_history__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsControllerPage = (function () {
    function TabsControllerPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        var info = this.auth.getUserInfo();
        this.type = info['type'];
        console.log("constructor");
        this.newvalue();
    }
    TabsControllerPage.prototype.newvalue = function () {
        if (this.type === "Student") {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_7__home_page_home_page__["a" /* StudentHomePage */];
            this.tab2Root = __WEBPACK_IMPORTED_MODULE_10__my_feedback_history_my_feedback_history__["a" /* MyFeedbackHistoryPage */];
            this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__staff_contact_staff_contact__["a" /* StaffContactPage */];
            this.tab4Root = __WEBPACK_IMPORTED_MODULE_9__profile_profile__["a" /* ProfilePage */];
        }
        else if (this.type === "TA" || this.type === "Lecturer") {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
            this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__["a" /* GroupListPage */];
            this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__["a" /* StaffContactInfoPage */];
            this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */];
        }
    };
    return TabsControllerPage;
}());
TabsControllerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__red_students_red_students__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, house) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.house = house;
        this.Deadlineraw = [];
        this.wkn = [];
        this.wkn2 = [];
        this.RCount = 0;
        this.ACount = 0;
        this.LCount = 0;
        this.DCount = 0;
        this.RGCount = 0;
        this.AGCount = 0;
        this.LGCount = 0;
        this.DGCount = 0;
        this.studentData = [];
        this.groupData = [];
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width);
        this.house.getDead().subscribe(function (dt) {
            _this.Deadlineraw = dt;
            for (var j in _this.Deadlineraw) {
                if (_this.Deadlineraw[j].deadt == 'Start Date') {
                    _this.dateString = _this.Deadlineraw[j].deadd;
                }
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getAllRedTeam().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Groups = JSON.parse(dt["_body"]);
                for (var i in _this.Groups) {
                    _this.wkn2.push(_this.Groups[i].weeknum);
                }
                _this.mx2 = Math.max.apply(Math, _this.wkn2);
                for (var k in _this.Groups) {
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 1) {
                        _this.RGCount = _this.RGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 2) {
                        _this.AGCount = _this.AGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 3) {
                        _this.LGCount = _this.LGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 4) {
                        _this.DGCount = _this.DGCount + 1;
                    }
                }
                _this.groupData.push(_this.RGCount);
                _this.groupData.push(_this.AGCount);
                _this.groupData.push(_this.LGCount);
                _this.groupData.push(_this.DGCount);
                var donutGroup = _this.doughnutCanvas.nativeElement;
                donutGroup.height = innerHeight * 0.25;
                console.log(donutGroup.height);
                var datax = _this.groupData;
                var dataGroup = {
                    labels: datax,
                    datasets: [
                        {
                            "data": datax,
                            "backgroundColor": [
                                "#ff6384",
                                "#ffcd56",
                                "#7ed321",
                                "#058d65",
                            ]
                        }
                    ]
                };
                _this.doughnutGroup = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutGroup, {
                    "type": 'doughnut',
                    "data": dataGroup,
                    "options": {
                        legend: {
                            display: false,
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        },
                    }
                });
            }
            else {
                // HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        this.house.getAllRedStudent().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                for (var i in _this.Students) {
                    _this.wkn.push(_this.Students[i].weeknum);
                }
                _this.mx = Math.max.apply(Math, _this.wkn);
                for (var k in _this.Students) {
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 1) {
                        _this.RCount = _this.RCount + 1;
                        console.log(_this.RCount);
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 2) {
                        _this.ACount = _this.ACount + 1;
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 3) {
                        _this.LCount = _this.LCount + 1;
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 4) {
                        _this.DCount = _this.DCount + 1;
                    }
                }
                _this.studentData.push(_this.RCount);
                _this.studentData.push(_this.ACount);
                _this.studentData.push(_this.LCount);
                _this.studentData.push(_this.DCount);
                console.log(_this.studentData);
                var donutStudent = _this.doughnutCanvasS.nativeElement;
                donutStudent.height = innerHeight * 0.25;
                var dataStudent = {
                    datasets: [
                        {
                            "data": _this.studentData,
                            "backgroundColor": [
                                "#ff6384",
                                "#ffcd56",
                                "#7ed321",
                                "#058d65",
                            ]
                        }
                    ]
                };
                _this.doughnutStudent = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutStudent, {
                    "type": 'doughnut',
                    "data": dataStudent,
                    "options": {
                        legend: {
                            display: false,
                            position: 'right',
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        }
                    }
                });
            }
            else {
                // HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        console.log(this.studentData);
        this.slides.autoHeight = true;
        console.log("happened");
    };
    HomePage.prototype.CurrentWeek = function () {
        var start = new Date(this.dateString);
        var today = new Date();
        var diff = (today.getTime() - start.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        var diyy = Math.abs(Math.floor(diff)) + 1;
        if (diyy > 10) {
            return 'holidays';
        }
        else {
            var weekcounter = 'Week ' + String(diyy);
            return weekcounter;
        }
    };
    /* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Sync in process ', refresher);
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width);
        console.log(this.innerHeight);
        console.log(this.innerWidth);
        this.Students = [];
        this.Groups = [];
        this.wkn = [];
        this.wkn2 = [];
        this.mx = 0;
        this.mx2 = 0;
        this.RCount = 0;
        this.ACount = 0;
        this.LCount = 0;
        this.DCount = 0;
        this.RGCount = 0;
        this.AGCount = 0;
        this.LGCount = 0;
        this.DGCount = 0;
        this.studentData = [];
        this.groupData = [];
        this.house.getAllRedTeam().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Groups = JSON.parse(dt["_body"]);
                for (var i in _this.Groups) {
                    _this.wkn2.push(_this.Groups[i].weeknum);
                }
                _this.mx2 = Math.max.apply(Math, _this.wkn2);
                for (var k in _this.Groups) {
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 1) {
                        _this.RGCount = _this.RGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 2) {
                        _this.AGCount = _this.AGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 3) {
                        _this.LGCount = _this.LGCount + 1;
                    }
                    if (_this.Groups[k].weeknum == _this.mx2 && _this.Groups[k].g_fb == 4) {
                        _this.DGCount = _this.DGCount + 1;
                    }
                }
                _this.groupData.push(_this.RGCount);
                _this.groupData.push(_this.AGCount);
                _this.groupData.push(_this.LGCount);
                _this.groupData.push(_this.DGCount);
                var donutGroup = _this.doughnutCanvas.nativeElement;
                console.log(donutGroup.height);
                var datax = _this.groupData;
                var dataGroup = {
                    labels: datax,
                    datasets: [
                        {
                            "data": datax,
                            "backgroundColor": [
                                "#ff6384",
                                "#ffcd56",
                                "#7ed321",
                                "#058d65",
                            ]
                        }
                    ]
                };
                _this.doughnutGroup = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutGroup, {
                    "type": 'doughnut',
                    "data": dataGroup,
                    "options": {
                        legend: {
                            display: false,
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        },
                    }
                });
            }
            else {
                // HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        this.house.getAllRedStudent().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                for (var i in _this.Students) {
                    _this.wkn.push(_this.Students[i].weeknum);
                }
                _this.mx = Math.max.apply(Math, _this.wkn);
                for (var k in _this.Students) {
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 1) {
                        _this.RCount = _this.RCount + 1;
                        console.log(_this.RCount);
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 2) {
                        _this.ACount = _this.ACount + 1;
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 3) {
                        _this.LCount = _this.LCount + 1;
                    }
                    if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 4) {
                        _this.DCount = _this.DCount + 1;
                    }
                }
                _this.studentData.push(_this.RCount);
                _this.studentData.push(_this.ACount);
                _this.studentData.push(_this.LCount);
                _this.studentData.push(_this.DCount);
                console.log(_this.studentData);
                var donutStudent = _this.doughnutCanvasS.nativeElement;
                var dataStudent = {
                    datasets: [
                        {
                            "data": _this.studentData,
                            "backgroundColor": [
                                "#ff6384",
                                "#ffcd56",
                                "#7ed321",
                                "#058d65",
                            ]
                        }
                    ]
                };
                _this.doughnutStudent = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutStudent, {
                    "type": 'doughnut',
                    "data": dataStudent,
                    "options": {
                        legend: {
                            display: false,
                            position: 'right',
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        }
                    }
                });
            }
            else {
                // HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    HomePage.prototype.goToDeadlines = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__["a" /* DeadlinesPage */]);
    };
    HomePage.prototype.goToRedGroups = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__["a" /* RedGroupsPage */]);
    };
    HomePage.prototype.goToRedStudents = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__red_students_red_students__["a" /* RedStudentsPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvasS'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvasS", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Adding Refresher Section -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!--Button to Deadlines Section -->\n    <div id="deadlines-section" no-padding>\n        <button id="deadlines-button" ion-button block icon-right style="text-align:right;"\n                on-click="goToDeadlines()">\n            Deadlines \n            <ion-icon name="calendar"></ion-icon>\n        </button>\n    </div>\n\n    <!--Notification for Feedback Request-->\n<div id="notification-section" no-padding no-margin >\n    <ion-card text-center id="notification" no-margin>\n        <h6 style="padding-top: 0 auto !important">Currently in {{CurrentWeek()}}</h6>\n    </ion-card>\n</div>\n\n    <!--Latest Feedback title section-->\n    <h4 id="home-heading11" style="color:#000000;">\n        Latest Feedback\n    </h4>\n\n    <!--Graph section with information-->\n    <div id="graph-section">\n        <ion-slides pager="true"> <!--pager for the small points-->\n            <ion-slide>\n                <canvas #doughnutCanvas></canvas>\n                <h6 padding=20px>\n                    Groups Feedback\n                </h6>\n                <div class="spacer" style="height:10px;"></div>\n\n                <ion-grid style="margin-bottom: 5px;"> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin class="greendarklabel">\n                            excellent\n                        </ion-label>\n                        <ion-label no-padding no-margin class="greenlabel">\n                            good\n                        </ion-label>\n                        <ion-label no-padding no-margin class="yellowlabel">\n                            average\n                        </ion-label>\n                        <ion-label no-padding no-margin class="redlabel">\n                            danger\n                        </ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[3]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[2]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[1]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[0]}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n\n                <div class="spacer" style="height:5px;" id="spacerline"></div>\n            </ion-slide>\n            <ion-slide>\n                <canvas #doughnutCanvasS></canvas>\n                <h6 id="home-heading12">\n                    Students Feedback\n                </h6>\n                <div class="spacer" style="height:10px;"></div>\n\n                <ion-grid style="margin-bottom: 5px;"> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin class="greendarklabel">\n                            excellent\n                        </ion-label>\n                        <ion-label no-padding no-margin class="greenlabel">\n                            good\n                        </ion-label>\n                        <ion-label no-padding no-margin class="yellowlabel">\n                            average\n                        </ion-label>\n                        <ion-label no-padding no-margin class="redlabel">\n                            danger\n                        </ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[3]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[2]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[1]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[0]}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n\n                <div class="spacer" style="height:5px;"></div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div id="buttonsection">\n        <ion-row class="rowbuttons">\n            <ion-col col-6>\n                <button class="redbutton" ion-button no-padding on-click="goToRedGroups()">\n                    Red Teams\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button class="redbutton" ion-button no-padding on-click="goToRedStudents()">\n                    Red Students\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_house_house__["a" /* HouseProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedGroupsPage = (function () {
    function RedGroupsPage(navCtrl, house, http, http2) {
        this.navCtrl = navCtrl;
        this.house = house;
        this.http = http;
        this.http2 = http2;
        this.dt = {};
        this.dt2 = {};
        this.wkn = [];
        this.clicked = false;
        this.RGroups = [];
        this.RWeeks = [];
        this.RIWeeks = [];
        this.Message = 'Press on a Group!';
    }
    RedGroupsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getAllRedTeam().subscribe(function (dt) {
            _this.Groups = JSON.parse(dt["_body"]);
            for (var i in _this.Groups) {
                _this.wkn.push(_this.Groups[i].weeknum);
            }
            _this.mx = Math.max.apply(Math, _this.wkn);
            for (var k in _this.Groups) {
                if (_this.Groups[k].weeknum == _this.mx && _this.Groups[k].g_fb == 1) {
                    _this.RGroups.push(_this.Groups[k]);
                }
            }
            if (_this.RGroups.length == 0) {
                _this.Message = 'No Red Groups!';
            }
        });
    };
    RedGroupsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.Message = 'Press on a Group!';
        this.dt = {};
        this.wkn = [];
        this.mx = 0;
        this.clicked = false;
        this.Groups = [];
        this.RGroups = [];
        this.house.getAllRedTeam().subscribe(function (dt) {
            _this.Groups = JSON.parse(dt["_body"]);
            for (var i in _this.Groups) {
                _this.wkn.push(_this.Groups[i].weeknum);
            }
            _this.mx = Math.max.apply(Math, _this.wkn);
            for (var k in _this.Groups) {
                if (_this.Groups[k].weeknum == _this.mx && _this.Groups[k].g_fb == 1) {
                    _this.RGroups.push(_this.Groups[k]);
                }
            }
            if (_this.RGroups.length == 0) {
                _this.Message = 'No Red Groups!';
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RedGroupsPage.prototype.onClick = function (gid) {
        var _this = this;
        this.RWeeks = [];
        this.RIWeeks = [];
        this.clicked = true;
        this.Weeks = [];
        this.house.getAllRedTeam().subscribe(function (dt2) {
            _this.Weeks = JSON.parse(dt2["_body"]);
            for (var i in _this.Weeks) {
                if (_this.Weeks[i].g_id == gid) {
                    _this.RIWeeks.push(_this.Weeks[i].weeknum);
                }
            }
            _this.RIWeeks.sort(function (a, b) {
                return a - b;
            });
            for (var q in _this.RIWeeks) {
                for (var j in _this.Weeks) {
                    if (_this.Weeks[j].weeknum == _this.RIWeeks[q]) {
                        if (_this.Weeks[j].g_id == gid) {
                            _this.RWeeks.push(_this.Weeks[j]);
                        }
                    }
                }
            }
            for (var i = 0; i < _this.RWeeks.length; i++) {
                if (_this.RWeeks[i].g_fb == 4) {
                    _this.RWeeks[i].g_fb = "dark";
                }
                else if (_this.RWeeks[i].g_fb == 3) {
                    _this.RWeeks[i].g_fb = "light";
                }
                else if (_this.RWeeks[i].g_fb == 2) {
                    _this.RWeeks[i].g_fb = "secondary";
                }
                else if (_this.RWeeks[i].g_fb == 1) {
                    _this.RWeeks[i].g_fb = "danger";
                }
            }
        });
    };
    return RedGroupsPage;
}());
RedGroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8"> \n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> \n  <ion-scroll scrollX="true">\n    <ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RGroups == 0 && Message == \'Press on a Group!\'"></ion-spinner>\n    <ion-row nowrap class= "scroller" *ngIf="RGroups != 0">\n      <button ion-button color= "danger" *ngFor= "let BadG of RGroups" (click)= "onClick(BadG.g_id)" class= "BadButton">\n          G{{BadG.g_id}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n  <div>\n      <ion-item-divider>\n          <p id="weekdiv" style="color:grey !important;">{{Message}}</p>\n      </ion-item-divider>\n  </div>\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n<ion-spinner name="dots" style= "margin-left:41vw;" *ngIf="RWeeks == 0 && clicked"></ion-spinner>\n<ion-list *ngIf="RWeekds != 0">\n  <div *ngFor= "let BadWeek of RWeeks">\n    <ion-item-divider color= "{{BadWeek.g_fb}}" >\n        <p id="weekdiv" style="color:white !important;">Week {{BadWeek.weeknum}}</p>\n    </ion-item-divider>\n  <ion-item text-wrap>\n    <div class= "Week">\n      <p style="color: rgb(94, 91, 91)">{{BadWeek.g_c}}\n      <p>\n    </div>\n  </ion-item>\n</div>\n\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RedGroupsPage);

//# sourceMappingURL=red-groups.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedStudentsPage = (function () {
    function RedStudentsPage(navCtrl, house, http, http2) {
        this.navCtrl = navCtrl;
        this.house = house;
        this.http = http;
        this.http2 = http2;
        this.dt = {};
        this.dt2 = {};
        this.wkn = [];
        this.clicked = false;
        this.RStudents = [];
        this.RWeeks = [];
        this.RIWeeks = [];
        this.Message = 'Press on a Student!';
    }
    RedStudentsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getAllRedStudent().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            for (var i in _this.Students) {
                _this.wkn.push(_this.Students[i].weeknum);
            }
            _this.mx = Math.max.apply(Math, _this.wkn);
            for (var k in _this.Students) {
                if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 1) {
                    _this.RStudents.push(_this.Students[k]);
                }
            }
            if (_this.RStudents.length == 0) {
                _this.Message = 'No Red Students!';
            }
        });
    };
    RedStudentsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.Message = 'Press on a Student!';
        this.dt = {};
        this.wkn = [];
        this.mx = 0;
        this.clicked = false;
        this.Students = [];
        this.RStudents = [];
        this.RWeeks = [];
        this.RIWeeks = [];
        this.house.getAllRedStudent().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            for (var i in _this.Students) {
                _this.wkn.push(_this.Students[i].weeknum);
            }
            _this.mx = Math.max.apply(Math, _this.wkn);
            for (var k in _this.Students) {
                if (_this.Students[k].weeknum == _this.mx && _this.Students[k].st_fb == 1) {
                    _this.RStudents.push(_this.Students[k]);
                }
            }
            if (_this.RStudents.length == 0) {
                _this.Message = 'No Red Students!';
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RedStudentsPage.prototype.onClick = function (first, last) {
        var _this = this;
        this.RWeeks = [];
        this.RIWeeks = [];
        this.clicked = true;
        this.Weeks = [];
        this.Fullname = first.concat(" ", last);
        this.house.getAllRedStudent().subscribe(function (dt2) {
            _this.Weeks = JSON.parse(dt2["_body"]);
            for (var i in _this.Weeks) {
                if (_this.Weeks[i].first == first && _this.Weeks[i].last == last) {
                    _this.RIWeeks.push(_this.Weeks[i].weeknum);
                }
            }
            _this.RIWeeks.sort(function (a, b) {
                return a - b;
            });
            for (var q in _this.RIWeeks) {
                for (var j in _this.Weeks) {
                    if (_this.Weeks[j].weeknum == _this.RIWeeks[q]) {
                        if (_this.Weeks[j].first == first && _this.Weeks[j].last == last) {
                            _this.RWeeks.push(_this.Weeks[j]);
                        }
                    }
                }
            }
            for (var i = 0; i < _this.RWeeks.length; i++) {
                if (_this.RWeeks[i].st_fb == 4) {
                    _this.RWeeks[i].st_fb = "dark";
                }
                else if (_this.RWeeks[i].st_fb == 3) {
                    _this.RWeeks[i].st_fb = "light";
                }
                else if (_this.RWeeks[i].st_fb == 2) {
                    _this.RWeeks[i].st_fb = "secondary";
                }
                else if (_this.RWeeks[i].st_fb == 1) {
                    _this.RWeeks[i].st_fb = "danger";
                }
            }
        });
    };
    return RedStudentsPage;
}());
RedStudentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-scroll scrollX="true">\n    <ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RStudents == 0 && Message == \'Press on a Student!\'"></ion-spinner>\n    <ion-row nowrap class= "scroller" *ngIf="RStudents != 0">\n      <div *ngFor= "let BadStu of RStudents">\n      <button ion-button color= "danger" (click)="onClick(BadStu.first, BadStu.last)" class= "StudentButton" round="true">\n          {{BadStu.first}} {{BadStu.last}}\n      </button>\n      </div>\n    </ion-row>\n  </ion-scroll>\n\n  <div>\n      <ion-item-divider>\n          <p id="weekdiv" style="color:grey !important;">{{Message}}</p>\n      </ion-item-divider>\n  </div>\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n\n  <p style= "margin-left:44vw; margin-bottom:-1vh;" *ngFor="let con of Contribution">{{con}}</p>\n\n<ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RWeeks == 0 && clicked"></ion-spinner>\n\n<div *ngFor="let BadW of RWeeks">\n<ion-list *ngIf="RWeeks != 0">\n  <ion-item-divider color= {{BadW.st_fb}} >\n  <p id="weekdiv" style="color:white !important;">Week {{BadW.weeknum}}</p>\n  </ion-item-divider>\n  <!-- individual feedbacks of the performances -->\n  <ion-item no-lines>\n      <p  style="color: rgb(94, 91, 91)" class="name">{{Fullname}}</p>\n      <p item-right style="color: rgb(94, 91, 91)">\n          Contribution: {{BadW.contr}}%\n      </p>\n    </ion-item>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RedStudentsPage);

//# sourceMappingURL=red-students.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupListPage = (function () {
    function GroupListPage(navCtrl, house) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.house = house;
        this.items = [];
        this.itemstemp = [];
        this.items2 = [];
        this.TAGroups = [];
        // NEW ARRAY - PROJECT DESCRIPTIONS NEED TO BE LOADED HERE?
        //descriptions: any[] = ['description 1 lala', 'description 2', 'description 3'];
        this.descriptions = [];
        this.wkn = [];
        this.performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
        this.house.GetStage2Student().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Groups = JSON.parse(dt["_body"]);
                console.log(_this.Groups);
                for (var q in _this.Groups) {
                    if (!_this.TAGroups.includes(_this.Groups[q].g_ID)) {
                        _this.TAGroups.push(_this.Groups[q].g_ID);
                    }
                }
                for (var i in _this.TAGroups) {
                    var groupw = [];
                    for (var z in _this.Groups) {
                        console.log(_this.Groups[z].g_ID == _this.TAGroups[i]);
                        if (_this.Groups[z].g_ID == _this.TAGroups[i]) {
                            groupw.push(_this.Groups[z].g_wk);
                        }
                    }
                    var groupmax = Math.max.apply(Math, groupw);
                    for (var k in _this.Groups) {
                        if (_this.Groups[k].g_wk == groupmax && _this.Groups[k].g_ID == _this.TAGroups[i]) {
                            if (!_this.items.includes(_this.Groups[k].g_ID)) {
                                _this.items.push(_this.Groups[k].g_ID);
                                _this.itemstemp.push(_this.Groups[k].gp);
                                _this.descriptions.push(_this.Groups[k].pro);
                            }
                        }
                    }
                }
                for (var j in _this.itemstemp) {
                    if (_this.itemstemp[j] == 1) {
                        _this.items2.push('Bad');
                    }
                    if (_this.itemstemp[j] == 2) {
                        _this.items2.push('Ok');
                    }
                    if (_this.itemstemp[j] == 3) {
                        _this.items2.push('Good');
                    }
                    if (_this.itemstemp[j] == 4) {
                        _this.items2.push('Excellent');
                    }
                }
                console.log(_this.items);
            }
            else {
                // IF THERE ARE NO GROUPS WITH FEEDBACK HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
    }
    GroupListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.items = [];
        this.itemstemp = [];
        this.items2 = [];
        this.Groups = [];
        this.TAGroups = [];
        this.descriptions = [];
        this.house.GetStage2Student().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Groups = JSON.parse(dt["_body"]);
                console.log(_this.Groups);
                for (var q in _this.Groups) {
                    if (!_this.TAGroups.includes(_this.Groups[q].g_ID)) {
                        _this.TAGroups.push(_this.Groups[q].g_ID);
                    }
                }
                for (var i in _this.TAGroups) {
                    var groupw = [];
                    for (var z in _this.Groups) {
                        console.log(_this.Groups[z].g_ID == _this.TAGroups[i]);
                        if (_this.Groups[z].g_ID == _this.TAGroups[i]) {
                            groupw.push(_this.Groups[z].g_wk);
                        }
                    }
                    var groupmax = Math.max.apply(Math, groupw);
                    for (var k in _this.Groups) {
                        if (_this.Groups[k].g_wk == groupmax && _this.Groups[k].g_ID == _this.TAGroups[i]) {
                            if (!_this.items.includes(_this.Groups[k].g_ID)) {
                                _this.items.push(_this.Groups[k].g_ID);
                                _this.itemstemp.push(_this.Groups[k].gp);
                                _this.descriptions.push(_this.Groups[k].pro);
                            }
                        }
                    }
                }
                for (var j in _this.itemstemp) {
                    if (_this.itemstemp[j] == 1) {
                        _this.items2.push('Bad');
                    }
                    if (_this.itemstemp[j] == 2) {
                        _this.items2.push('Ok');
                    }
                    if (_this.itemstemp[j] == 3) {
                        _this.items2.push('Good');
                    }
                    if (_this.itemstemp[j] == 4) {
                        _this.items2.push('Excellent');
                    }
                }
                console.log(_this.items);
            }
            else {
                // IF THERE ARE NO GROUPS WITH FEEDBACK HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GroupListPage.prototype.getPerformance = function (x) {
        var value = this.itemstemp[x];
        if (value == 0) {
            var colorEmpty = 'new';
            return colorEmpty;
        }
        else {
            var colorName = this.performanceAnnotation[value - 1];
            return colorName;
        }
    };
    GroupListPage.prototype.goToFeedbackSummary = function (Gchosen) {
        this.Gchosen = Gchosen;
        console.log(this.Gchosen);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */], {
            param1: this.Gchosen
        });
    };
    GroupListPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__group_group__["a" /* GroupPage */]);
    };
    return GroupListPage;
}());
GroupListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding id="page3">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    \n    <div class="spacer" style="width:300px;height: 20px;" id="groupList-spacer6"></div>\n    <div class="section" *ngFor="let item of items; let i = index">\n        <button ion-button class="groupbutton {{getPerformance(i)}}" on-click="goToFeedbackSummary(item)">\n            <span class="button-inner">\n                <ion-item class="background {{getPerformance(i)}}" no-lines>\n                    <ion-row>\n                        <ion-col id="groupp">\n                            Group&nbsp; <span>{{item}}</span>\n                        </ion-col>\n                        <ion-col id="perf">\n                            <span id="hello">{{getPerformance(i)}}</span>&nbsp;\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col id="descriptions">\n                            {{descriptions[i]}}\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </span>\n        </button>\n     <!-- <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button> -->\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */]) === "function" && _b || Object])
], GroupListPage);

var _a, _b;
//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more_details_more_details__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedbackSummaryPage = (function () {
    function FeedbackSummaryPage(navCtrl, nav, house, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.house = house;
        this.http = http;
        this.overallperformance = "average";
        this.wkn = [];
        this.wcheck = [];
        this.ultimatewkn = [];
        this.percentageresults = [];
        this.results = [];
        this.contrrow = [];
        this.sprow = [];
        this.Students = [];
        this.StudentNames = [];
        this.StudentIDs = [];
        this.groupdata = [];
        this.sum = 0;
        this.performanceAnnotation = ['absent', 'bad', 'average', 'good', 'excellent']; //constants do not modify
        this.performanceColor = ['black', 'red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify
        this.colourval = "blue";
        this.groupnumber = this.nav.get('param1');
    }
    FeedbackSummaryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.GetStage2Student().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                console.log(_this.Students);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.StudentNames.includes(_this.str.concat(" ", _this.str2)) && _this.Students[i].g_ID == _this.groupnumber) {
                        _this.StudentNames.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                    }
                }
                for (var q in _this.Students) {
                    if (_this.Students[q].g_ID == _this.groupnumber && !_this.ultimatewkn.includes(_this.Students[q].s_wk)) {
                        _this.ultimatewkn.push(_this.Students[q].s_wk);
                        //this.groupdata.push(this.Students[q].gp);
                    }
                }
                _this.ultimatewkn.sort(function (a, b) {
                    return a - b;
                });
                console.log(_this.ultimatewkn);
                for (var p in _this.ultimatewkn) {
                    for (var z in _this.Students) {
                        if (_this.Students[z].g_ID == _this.groupnumber) {
                            console.log(_this.Students[z].s_wk == _this.ultimatewkn[p]);
                            if (_this.Students[z].s_wk == _this.ultimatewkn[p]) {
                                if (!_this.wcheck.includes(_this.Students[z].s_wk)) {
                                    _this.wcheck.push(_this.Students[z].s_wk);
                                    _this.groupdata.push(_this.Students[z].gp);
                                }
                            }
                        }
                    }
                }
                console.log(_this.groupdata);
                _this.mx2 = Math.max.apply(Math, _this.ultimatewkn);
                for (var e in _this.Students) {
                    console.log(_this.Students[e].g_wk == _this.mx2 && _this.Students[e].g_ID == _this.groupnumber);
                    if (_this.Students[e].g_wk == _this.mx2 && _this.Students[e].g_ID == _this.groupnumber) {
                        _this.latestfeedback = _this.Students[e].gp;
                    }
                }
                if (_this.latestfeedback == 1) {
                    _this.latestperformance = 'Bad';
                }
                if (_this.latestfeedback == 2) {
                    _this.latestperformance = 'Average';
                }
                if (_this.latestfeedback == 3) {
                    _this.latestperformance = 'Good';
                }
                if (_this.latestfeedback == 4) {
                    _this.latestperformance = 'Excellent';
                }
                for (var y in _this.groupdata) {
                    _this.sum = parseFloat((_this.sum).toString()) + parseFloat((_this.groupdata[y]).toString());
                }
                var a = (_this.sum / parseFloat((_this.groupdata.length).toString())).toFixed(1);
                _this.sum = parseFloat(a);
                for (var h in _this.ultimatewkn) {
                    console.log(_this.percentageresults);
                    _this.contrrow = [];
                    _this.sprow = [];
                    for (var g in _this.Students) {
                        for (var u in _this.StudentIDs) {
                            if (_this.Students[g].g_ID == _this.groupnumber && _this.ultimatewkn[h] == _this.Students[g].s_wk) {
                                if (_this.Students[g].s_ID == _this.StudentIDs[u]) {
                                    _this.contrrow.push(_this.Students[g].contr);
                                    _this.sprow.push(_this.Students[g].sp);
                                }
                            }
                        }
                    }
                    if (_this.contrrow.length != 0) {
                        _this.percentageresults.push(_this.contrrow);
                    }
                    if (_this.sprow.length != 0) {
                        _this.results.push(_this.sprow);
                    }
                }
            }
            else {
                // IF THERE ARE NO STUDENTS WITH FEEDBACK FOR THE CHOSEN GROUP HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
    };
    FeedbackSummaryPage.prototype.GetStage2Student = function () {
        var link = 'http://gc02team02app.azurewebsites.net/SQL/Stage2Student.php';
        var myData = JSON.stringify({ DaGroup: this.groupnumber });
        return this.http.post(link, myData);
    };
    FeedbackSummaryPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.wcheck = [];
        this.ultimatewkn = [];
        this.mx2 = 0;
        this.percentageresults = [];
        this.results = [];
        this.contrrow = [];
        this.sprow = [];
        this.Students = [];
        this.StudentNames = [];
        this.StudentIDs = [];
        this.groupdata = [];
        this.sum = 0;
        this.GetStage2Student().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                console.log(_this.Students);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.StudentNames.includes(_this.str.concat(" ", _this.str2)) && _this.Students[i].g_ID == _this.groupnumber) {
                        _this.StudentNames.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                    }
                }
                for (var q in _this.Students) {
                    if (_this.Students[q].g_ID == _this.groupnumber && !_this.ultimatewkn.includes(_this.Students[q].s_wk)) {
                        _this.ultimatewkn.push(_this.Students[q].s_wk);
                        //this.groupdata.push(this.Students[q].gp);
                    }
                }
                _this.ultimatewkn.sort(function (a, b) {
                    return a - b;
                });
                console.log(_this.ultimatewkn);
                for (var p in _this.ultimatewkn) {
                    for (var z in _this.Students) {
                        if (_this.Students[z].g_ID == _this.groupnumber) {
                            console.log(_this.Students[z].s_wk == _this.ultimatewkn[p]);
                            if (_this.Students[z].s_wk == _this.ultimatewkn[p]) {
                                if (!_this.wcheck.includes(_this.Students[z].s_wk)) {
                                    _this.wcheck.push(_this.Students[z].s_wk);
                                    _this.groupdata.push(_this.Students[z].gp);
                                }
                            }
                        }
                    }
                }
                console.log(_this.groupdata);
                _this.mx2 = Math.max.apply(Math, _this.ultimatewkn);
                for (var e in _this.Students) {
                    console.log(_this.Students[e].g_wk == _this.mx2 && _this.Students[e].g_ID == _this.groupnumber);
                    if (_this.Students[e].g_wk == _this.mx2 && _this.Students[e].g_ID == _this.groupnumber) {
                        _this.latestfeedback = _this.Students[e].gp;
                    }
                }
                if (_this.latestfeedback == 1) {
                    _this.latestperformance = 'Bad';
                }
                if (_this.latestfeedback == 2) {
                    _this.latestperformance = 'Average';
                }
                if (_this.latestfeedback == 3) {
                    _this.latestperformance = 'Good';
                }
                if (_this.latestfeedback == 4) {
                    _this.latestperformance = 'Excellent';
                }
                for (var y in _this.groupdata) {
                    _this.sum = parseFloat((_this.sum).toString()) + parseFloat((_this.groupdata[y]).toString());
                }
                var a = (_this.sum / parseFloat((_this.groupdata.length).toString())).toFixed(1);
                _this.sum = parseFloat(a);
                for (var h in _this.ultimatewkn) {
                    console.log(_this.percentageresults);
                    _this.contrrow = [];
                    _this.sprow = [];
                    for (var g in _this.Students) {
                        for (var u in _this.StudentIDs) {
                            if (_this.Students[g].g_ID == _this.groupnumber && _this.ultimatewkn[h] == _this.Students[g].s_wk) {
                                if (_this.Students[g].s_ID == _this.StudentIDs[u]) {
                                    _this.contrrow.push(_this.Students[g].contr);
                                    _this.sprow.push(_this.Students[g].sp);
                                }
                            }
                        }
                    }
                    if (_this.contrrow.length != 0) {
                        _this.percentageresults.push(_this.contrrow);
                    }
                    if (_this.sprow.length != 0) {
                        _this.results.push(_this.sprow);
                    }
                }
            }
            else {
                // IF THERE ARE NO STUDENTS WITH FEEDBACK FOR THE CHOSEN GROUP HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedbackSummaryPage.prototype.groupColorSetting = function (x) {
        var indexvalue = this.groupdata[x];
        var colorName = this.performanceColor[indexvalue];
        return colorName;
    };
    FeedbackSummaryPage.prototype.studentColorSetting = function (x, y) {
        var indexvalue = this.results[x][y];
        var studentColor = this.performanceColor[indexvalue];
        return studentColor;
    };
    FeedbackSummaryPage.prototype.setcolour = function () {
        var val = "blue";
        return val;
    };
    FeedbackSummaryPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__group_group__["a" /* GroupPage */], {
            param1: this.groupnumber
        });
    };
    FeedbackSummaryPage.prototype.goToDetails = function (week) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__more_details_more_details__["a" /* MoreDetailsPage */], {
            param1: this.groupnumber, param2: week
        });
    };
    return FeedbackSummaryPage;
}());
FeedbackSummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n\n    <h4 id="feedbackSummary-heading6">\n        Group {{groupnumber}}\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    \n    <div id="top" >\n        <div id="latestfeedback">\n            <p style="margin:0px;outline:none;" >Latest Feedback:\n                <br><span class="feedbackwriting">Week </span><span class="feedbackwriting">{{mx2}}</span></p>\n        </div>\n    </div>\n    <hr>\n    <div id="legend">\n        <div id="lll">\n          <p class="floating" id="overallp" style="color:#000000;">\n            Current average <br> performance:\n          </p>\n          <p class="floating" id="latestp" style="color:#000000;">\n            latest performance:\n            <br>\n            <span class="feedbackwriting" id="latestperformance">{{latestperformance}}</span>\n          </p>\n        </div>\n        <p class="feedbackwriting" id="performance2">\n          {{sum}} out of 4\n        </p>\n      </div>\n    <hr>\n    <h5 id="feedbackSummary-heading9" style="color:#000000;">\n        Weekly Feedback\n    </h5>\n    <div style="padding-bottom:7px;"><button class="performance darkgreen"></button> excellent <button class="performance lightgreen"></button> good <button class="performance yellow"></button> average <button class="performance red"></button> bad</div>\n    <hr>\n\n  <div id="feedbackSummary-container9" *ngFor="let week of ultimatewkn; let i = index">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider id="feedbackSummary-list-item-divider2" class="{{ groupColorSetting(i) }}">\n        <p id="weekdiv">Week {{week}}</p>\n        <p id="weekdiv2"><button id="feedbackSummary-button41" ion-button clear small (click)=\'goToDetails(week);\'>\n                more details\n            </button>\n        </p> \n      </ion-item-divider>\n      <ion-item text-wrap color="none" id="feedbackSummary-list-item56" *ngFor="let student of StudentNames; let j = index" (click)="setcolour();">\n          <p class="name">{{student}}</p>\n        <ion-note item-right>\n           <p><button class=" performance2 performance {{studentColorSetting(i, j)}}"></button><span id="percentage" style="padding-left:10px"> contribution: {{ percentageresults[i][j] }}%</span></p> \n        </ion-note>\n      </ion-item>\n      \n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], FeedbackSummaryPage);

//# sourceMappingURL=feedback-summary.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoreDetailsPage = (function () {
    function MoreDetailsPage(alertCtrl, navCtrl, nav, house, http, http2) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.house = house;
        this.http = http;
        this.http2 = http2;
        this.Students = [];
        this.names = [];
        this.StudentIDs = [];
        this.individualPerformances = [];
        this.individualComments = [];
        this.individualContributions = [];
        this.data = {};
        this.data2 = {};
        this.photoarray = [];
        this.values = ['absent', 'bad', 'average', 'good', 'excellent']; // don't change
        this.cardvalues = ['cardabsent', 'cardbad', 'cardaverage', 'cardgood', 'cardexcellent'];
        this.group = this.nav.get('param1');
        this.week = this.nav.get('param2');
    }
    MoreDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.MoreDets().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            console.log(_this.Students);
            for (var i in _this.Students) {
                if (_this.Students[i].g_wk == _this.week && _this.Students[i].g_ID == _this.group) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.names.includes(_this.str.concat(" ", _this.str2)) && _this.Students[i].g_ID == _this.group) {
                        _this.names.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                        _this.individualPerformances.push(_this.Students[i].sp);
                        _this.individualComments.push(_this.Students[i].sc);
                        _this.individualContributions.push(_this.Students[i].contr);
                        _this.groupComment = _this.Students[i].gc;
                        _this.groupPerformance = _this.Students[i].gp;
                        _this.photoarray.push(_this.Students[i].photo);
                    }
                }
            }
            _this.groupPerformance2 = _this.getGroupPerformance();
        });
    };
    MoreDetailsPage.prototype.getCard = function (i) {
        var performance = this.individualPerformances[i];
        var value = this.cardvalues[performance];
        console.log(value);
        return value;
    };
    MoreDetailsPage.prototype.getPerformance = function (x) {
        var performance = this.individualPerformances[x];
        var value = this.values[performance];
        return value;
    };
    MoreDetailsPage.prototype.getGroupPerformance = function () {
        var value = this.values[this.groupPerformance];
        return value;
    };
    MoreDetailsPage.prototype.photocompiler = function (i) {
        var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]);
        return photoname;
    };
    MoreDetailsPage.prototype.del = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Deletion',
            message: 'Do you want to proceed with deletion of this feedback?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        for (var j in _this.Students) {
                            var link = 'http://gc02team02app.azurewebsites.net/SQL/DelS.php';
                            var myData = JSON.stringify({ week: _this.week, sID: _this.StudentIDs[j] });
                            _this.http.post(link, myData).subscribe(function (data) {
                                _this.data.response = data["_body"];
                            }, function (error) {
                                console.log("Oooops!");
                            });
                        }
                        var link2 = 'http://gc02team02app.azurewebsites.net/SQL/DelG.php';
                        var myData2 = JSON.stringify({ week: _this.week, gID: _this.group });
                        _this.http2.post(link2, myData2).subscribe(function (data2) {
                            _this.data2.response = data2["_body"];
                        }, function (error) {
                            console.log("Oooops!");
                        });
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(0));
                    }
                }
            ]
        });
        alert.present();
    };
    return MoreDetailsPage;
}());
MoreDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-details',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details/more-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Week {{week}} details\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="font-size:16px;" padding>\n    <div class="spacer" style="height:5px;"></div>\n    <div id="latestfeedback">\n        <h5 style="margin:0px;outline:none;" >Group performance: \n          <span class="feedbackwriting">{{groupPerformance2}} </span></h5>\n    </div>\n  <div class="spacer" style="height:10px;"></div>\n  <p>"{{groupComment}}"</p>\n  <div class="spacer" style="height:5px;"></div>\n    <hr>\n  <h5>Student Performances</h5>\n  <ion-list *ngFor="let name of names; let i = index; ">\n    <ion-card id="{{getCard(i)}}">\n      <div>\n        <ion-item text-wrap color="none" id="group-list-item39">\n          <ion-avatar item-left>\n            <img src="{{ photocompiler(i) }}" style="height: 12vh; width: 22vw;">\n          </ion-avatar>\n          <p id="name" style="font-size:1.1em;">\n            {{name}}\n          </p>\n        </ion-item>\n        <ion-item>\n          Contribution: \n         {{individualContributions[i]}}% \n        </ion-item>\n        <ion-item text-wrap style ="color: grey !important">\n            {{individualComments[i]}}\n        </ion-item>\n      </div>\n    </ion-card>\n  </ion-list>\n  <div class="spacer" style="height:5px;"></div>\n  <div margin style="height: 7% !important;">\n    <button id="deletebutton" on-click="del();">Delete this Feedback</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details/more-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], MoreDetailsPage);

//# sourceMappingURL=more-details.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffContactInfoPage = (function () {
    function StaffContactInfoPage(navCtrl, house) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.house = house;
        this.GContact = [];
        this.SContact = [];
        this.house.GetGroupCon2().subscribe(function (dt) {
            _this.GContact = JSON.parse(dt["_body"]);
            for (var i in _this.GContact) {
                _this.GContact[i].pic = "https://docs.google.com/uc?id=".concat(_this.GContact[i].pic);
            }
            _this.GContact.sort(function (a, b) {
                return a.g_id - b.g_id;
            });
            console.log(_this.GContact);
        });
        this.house.GetSuper2().subscribe(function (dt2) {
            _this.SContact = JSON.parse(dt2["_body"]);
        });
    }
    return StaffContactInfoPage;
}());
StaffContactInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>\n    Lecturer\n  </h4>\n    <ion-item no-lines *ngFor= "let StaffC of SContact">\n      <ion-avatar item-start>\n        <img src= "{{StaffC.pic}}" style= "height: 12vh; width: 22vw; margin-left: 1.6vw;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -9vw;">\n        <li>{{StaffC.first}} {{StaffC.last}}</li>\n        <li>{{StaffC.email}}</li>\n      </ul>\n    </ion-item>\n\n  <hr>\n\n  <h4>\n    My Students\n  </h4>\n  \n    <ion-item no-lines *ngFor= "let GC of GContact">\n      <ion-avatar item-start>\n        <img src= "{{GC.pic}}" style= "height: 12vh; width: 22vw; margin-left: 1.6vw;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left:-4vw;">\n        <li>{{GC.first}}</li>\n        <li>{{GC.last}}</li>\n        <li>G{{GC.g_id}}</li>\n      </ul>  \n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */]])
], StaffContactInfoPage);

//# sourceMappingURL=staff-contact-info.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyProfilePage = (function () {
    // BACKEND HERE FOR SUPERVISING GROUPS
    //items = ['G1', 'G3', 'G8'];
    function MyProfilePage(app, navCtrl, auth, alertCtrl, house) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.house = house;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.type = '';
        this.data = {};
        this.sorting = [];
        this.items = [];
        this.Students = [];
        var info = this.auth.getUserInfo();
        this.firstName = info['firstName'];
        this.lastName = info['lastName'];
        this.email = info['email'];
        this.type = info['type'];
    }
    MyProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getProfileStaff().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            for (var i in _this.Students) {
                _this.sorting.push(_this.Students[i].g_id);
            }
            _this.sorting.sort(function (a, b) {
                return a - b;
            });
            for (var j in _this.sorting) {
                _this.items.push("G".concat(String(_this.sorting[j])));
            }
            _this.Picture = _this.Students[0].pic;
            //this.myGroup = "G".concat(this.Students[0].g_id);
            //this.groupDescription = this.Students[0].pro;
            //this.SID = this.Students[0].s_id;
        });
    };
    MyProfilePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    MyProfilePage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    MyProfilePage.prototype.changePassword = function () {
        var _this = this;
        if (this.password === null || this.password == null) {
            this.showError("No password inserted");
        }
        else if (this.password !== null) {
            if (this.password.length < 6) {
                this.showError("Please choose a password that is at least 6 characters long");
            }
            else {
                // BACKEND HERE TO SAVE PASSWORD
                this.house.PassPrelim(this.password).subscribe(function (data) {
                    _this.data.response = data["_body"];
                }, function (error) {
                    console.log("Oooops!");
                });
                var alert_1 = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your password was changed',
                    buttons: ['OK']
                });
                alert_1.present(prompt);
                this.password = null;
            }
        }
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content id="page4">\n    <div padding id="blueblue">\n        <button id="logout" (click)="logout()">Log out</button>\n        <img id ="profilepic" src= "{{Picture}}" style= "height: 12vh; width: 22vw;">\n        <form (ngSubmit)="changePassword()" id="passwordForm">\n            <ion-item no-lines id="myProfile-input1">\n                <ion-input [readonly]=true type="text" placeholder="{{firstName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input2">\n                <ion-input [readonly]=true type="text" placeholder="{{lastName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input3">\n                <ion-input [readonly]=true type="email" placeholder="{{email}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input4">\n                <ion-input type="password" placeholder="Enter new password" name="password" [(ngModel)]="this.password"></ion-input>\n            </ion-item>\n            <button type="submit" id="savechanges">Save password changes</button>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button id="button" *ngFor="let item of items">\n                {{ item }}\n            </button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deadlines_deadlines__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentHomePage = (function () {
    function StudentHomePage(navCtrl, house) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.house = house;
        this.Deadlineraw = [];
        this.Students = [];
        this.ultimatewkn = [];
        this.ultimatewkn2 = [];
        this.groupdata = [];
        this.studentdata = [];
        this.studentN = [];
        this.StudentIDs = [];
        this.contrhist = [];
        this.groupLatest = [];
        this.studentLatest = [];
        //variables to change for data retrieval
        //groupLatest = [3]; //latest group performance 
        //studentLatest = [3]; //latest student performance 
        //contribution = [33];  //latest student contribution 
        //weekindex = [4]; // latest week index
        //student = ['Samantha Watson']; //student name 
        //studentdata = [3, 2, 2, 1, 4, 3, 2]; //student performance history
        //groupdata = [4, 4, 3, 4, 3, 4, 3]; //group performance history 
        /*Not to change after here*/
        this.performanceDescription = ['bad', 'average', 'good', 'excellent']; //these are constants
        this.performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //these are constants
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width);
        this.student;
        this.contribution;
        this.weekindex;
        this.performanceDescription;
        this.house.getDead().subscribe(function (dt) {
            _this.Deadlineraw = dt;
            for (var j in _this.Deadlineraw) {
                if (_this.Deadlineraw[j].deadt == 'Start Date') {
                    _this.dateString = _this.Deadlineraw[j].deadd;
                }
            }
        });
    }
    StudentHomePage.prototype.CurrentWeek = function () {
        var start = new Date(this.dateString);
        var today = new Date();
        var diff = (today.getTime() - start.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        var diyy = Math.abs(Math.floor(diff)) + 1;
        if (diyy > 10) {
            return 'holidays';
        }
        else {
            var weekcounter = 'Week ' + String(diyy);
            return weekcounter;
        }
    };
    StudentHomePage.prototype.latestPerformance = function () {
        var latestGroup = this.groupLatest;
        var indicator;
        indicator = latestGroup[0] - 1;
        return indicator;
    };
    StudentHomePage.prototype.studentLatestPerformance = function () {
        var latestStudent = this.studentLatest;
        var indicator;
        indicator = latestStudent[0] - 1;
        return indicator;
    };
    StudentHomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.GetStudentHome().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                console.log(_this.Students);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.studentN.includes(_this.str.concat(" ", _this.str2))) {
                        _this.studentN.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                    }
                }
                _this.student = _this.studentN[0];
                for (var q in _this.Students) {
                    _this.ultimatewkn.push(_this.Students[q].s_wk);
                }
                _this.ultimatewkn.sort(function (a, b) {
                    return a - b;
                });
                for (var p in _this.ultimatewkn) {
                    for (var x_1 in _this.Students) {
                        if (_this.Students[x_1].s_wk == _this.ultimatewkn[p]) {
                            _this.groupdata.push(_this.Students[x_1].gp);
                            _this.studentdata.push(_this.Students[x_1].sp);
                            _this.contrhist.push(_this.Students[x_1].contr);
                        }
                    }
                }
                _this.weekindex = Math.max.apply(Math, _this.ultimatewkn);
                console.log(_this.weekindex);
                _this.groupLatest.push(_this.groupdata[_this.weekindex - 1]);
                _this.studentLatest.push(_this.studentdata[_this.weekindex - 1]);
                _this.contribution = _this.contrhist[_this.weekindex - 1];
                for (var t in _this.ultimatewkn) {
                    var x;
                    var y;
                    y = "W";
                    x = String(_this.ultimatewkn[t]);
                    _this.ultimatewkn2.push(y.concat("", x));
                }
                var lineCTX = _this.lineCanvas.nativeElement;
                lineCTX.height = innerHeight * 0.4;
                lineCTX.width = innerWidth;
                var data = {
                    labels: _this.ultimatewkn2,
                    datasets: [
                        {
                            label: 'me',
                            data: _this.studentdata,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,99,132,1)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBorderWidth: 5,
                            pointHoverRadius: 10,
                            pointHoverBackgroundColor: "rgba(255,99,132,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: 'my group',
                            data: _this.groupdata,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(0,168,255,0.4)",
                            borderColor: "rgba(0,168,255,0.4)",
                            pointBorderWidth: 5,
                            pointHoverRadius: 10,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(0,168,255,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }
                    ]
                };
                new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](lineCTX, {
                    "type": 'line',
                    "data": data,
                    "options": {
                        scales: {
                            yAxes: [{
                                    display: true,
                                    ticks: {
                                        beginAtZero: true,
                                        stepValue: 1,
                                        max: 4
                                    }
                                }]
                        },
                        legend: {
                            display: true,
                            position: 'top',
                            responsive: true,
                            maintainAspectRatio: false,
                        },
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        },
                    }
                });
            }
            else {
                // IF THERE IS NO FEEDBACK DATA FOR THAT STUDENT. HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
    };
    StudentHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        //innerHeight: any;
        //innerWidth: any;
        //lineChart: any;
        this.Students = [];
        this.ultimatewkn = [];
        this.ultimatewkn2 = [];
        this.weekindex = 0;
        this.groupdata = [];
        this.studentdata = [];
        this.studentN = [];
        this.StudentIDs = [];
        this.contrhist = [];
        this.contribution = 0;
        this.groupLatest = [];
        this.studentLatest = [];
        this.house.GetStudentHome().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                console.log(_this.Students);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.studentN.includes(_this.str.concat(" ", _this.str2))) {
                        _this.studentN.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                    }
                }
                _this.student = _this.studentN[0];
                for (var q in _this.Students) {
                    _this.ultimatewkn.push(_this.Students[q].s_wk);
                }
                _this.ultimatewkn.sort(function (a, b) {
                    return a - b;
                });
                for (var p in _this.ultimatewkn) {
                    for (var x_2 in _this.Students) {
                        if (_this.Students[x_2].s_wk == _this.ultimatewkn[p]) {
                            _this.groupdata.push(_this.Students[x_2].gp);
                            _this.studentdata.push(_this.Students[x_2].sp);
                            _this.contrhist.push(_this.Students[x_2].contr);
                        }
                    }
                }
                _this.weekindex = Math.max.apply(Math, _this.ultimatewkn);
                console.log(_this.weekindex);
                _this.groupLatest.push(_this.groupdata[_this.weekindex - 1]);
                _this.studentLatest.push(_this.studentdata[_this.weekindex - 1]);
                _this.contribution = _this.contrhist[_this.weekindex - 1];
                for (var t in _this.ultimatewkn) {
                    var x;
                    var y;
                    y = "W";
                    x = String(_this.ultimatewkn[t]);
                    _this.ultimatewkn2.push(y.concat("", x));
                }
                var lineCTX = _this.lineCanvas.nativeElement;
                lineCTX.height = innerHeight * 0.4;
                lineCTX.width = innerWidth;
                var data = {
                    labels: _this.ultimatewkn2,
                    datasets: [
                        {
                            label: 'me',
                            data: _this.studentdata,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,99,132,1)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBorderWidth: 5,
                            pointHoverRadius: 10,
                            pointHoverBackgroundColor: "rgba(255,99,132,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: 'my group',
                            data: _this.groupdata,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(0,168,255,0.4)",
                            borderColor: "rgba(0,168,255,0.4)",
                            pointBorderWidth: 5,
                            pointHoverRadius: 10,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(0,168,255,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }
                    ]
                };
                new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](lineCTX, {
                    "type": 'line',
                    "data": data,
                    "options": {
                        legend: {
                            display: true,
                            position: 'top',
                            responsive: true,
                            maintainAspectRatio: false
                        },
                        "animation": {
                            "animateScale": true,
                            "animateRotate": false
                        },
                    }
                });
            }
            else {
                // IF THERE IS NO FEEDBACK DATA FOR THAT STUDENT. HERE HERE HERE HERE HERE HERE HERE HERE HERE
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    StudentHomePage.prototype.goToDeadlines = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__deadlines_deadlines__["a" /* DeadlinesPage */]);
    };
    return StudentHomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], StudentHomePage.prototype, "lineCanvas", void 0);
StudentHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-page',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home-page/home-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n    <div id="notification-section" no-padding no-margin >\n        <ion-card text-center id="notification" no-padding no-margin>\n            <h6 style="padding-top: 0 auto !important; color: white;">Currently in {{CurrentWeek()}}</h6>\n        </ion-card>\n    </div>\n    <div class="spacer" style="height:2% ;" id="spacerline"></div>\n    \n    <div id="deadlines-section" no-padding>\n        <button id="deadlines-button" ion-button block icon-right style="text-align:right;"\n                on-click="goToDeadlines()">\n            Deadlines \n            <ion-icon name="calendar"></ion-icon>\n        </button>\n    </div>\n\n    \n    <div class="spacer" style="height:3% ;" id="spacerline"></div>\n    <div id="header-section">\n    <h4>My Overview</h4>\n    </div>\n    <div class="spacer" style="height:5%; " id="spacerline"></div>\n        \n    <ion-card class="graphCard" style="border-top: 5px solid #00A8FF;" padding no-margin>\n        <ion-card-content>\n          <canvas #lineCanvas></canvas>\n        </ion-card-content>\n    </ion-card>\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n  <div id="header-section">\n      <h4>Latest Feedback</h4>\n      </div>\n  <div class="spacer" style="height:5%; " id="spacerline"></div>\n    <div style="height: 30vh;">\n        <ion-card no-padding no-margin style="height: 40% !important;"> <!-- important to position the card in the center -->\n            <ion-card-content no-padding no-margin> <!-- important to fill the content of the card with the group performance color -->\n                <ion-item-divider style="width: 100% !important; height: 2vh !important; color: white;" class="{{ performanceColor[latestPerformance()] }}">\n                    <p id="weekdiv" style="color: white;">Week {{weekindex}} group peformance: </p>\n                    <p style="float: right; color: white;"> {{ performanceDescription[latestPerformance()] }} </p>\n                  </ion-item-divider>\n                  <ion-item color="none" id="feedbackSummary-list-item56">\n                      <p class="name">{{student}}</p>\n                      <ion-note item-right>\n                       <p><button class="performance {{ performanceColor[studentLatestPerformance()] }}"></button><span id="percentage" style="padding-left:10px"> {{contribution}}% (contribution)</span></p>\n                      </ion-note>\n                    </ion-item>\n              </ion-card-content>\n            </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home-page/home-page.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */]) === "function" && _b || Object])
], StudentHomePage);

var _a, _b;
//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffContactPage = (function () {
    function StaffContactPage(navCtrl, house) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.house = house;
        this.house.getStaffCon().subscribe(function (data) { return _this.TAContact = data; });
    }
    StaffContactPage.prototype.ngOnInit = function () {
        this.StaffContact = [{ Name: "Yun Fu", Email: "yunfu@ucl.ac.uk", Hours: "13:00", Location: "Malet Place" }];
    };
    return StaffContactPage;
}());
StaffContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-staff-contact',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact/staff-contact.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>\n    Lecturer\n  </h4>\n    <ion-item no-lines *ngFor= "let StaffC of StaffContact">\n      <ion-avatar item-start>\n        <img src= "https://docs.google.com/uc?id=1jBNm4xWINklxipgU1Wkka17YY34x8JY4" style= "height: 12vh; width: 22vw; margin-left: 1.6vw;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -9vw;">\n        <li>{{StaffC.Name}}</li>\n        <li>{{StaffC.Email}}</li>\n        <li>{{StaffC.Hours}}</li>\n        <li>{{StaffC.Location}}</li>\n      </ul>\n    </ion-item>\n\n  <hr>\n\n  <h4>\n    Teaching Assistants\n  </h4>\n  \n    <ion-item no-lines *ngFor= "let TAC of TAContact">\n      <ion-avatar item-start>\n        <img class= "TAsize" src= "{{TAC.pic}}" style= "height: 10vh; width: 18vw; margin-left: 4vw; margin-top:-6vh;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li>{{TAC.first}}</li>\n        <li>{{TAC.email}}</li>\n      </ul>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li><u>Experience:</u></li>\n        <li>{{TAC.s_exp}}</li>\n      </ul>  \n\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact/staff-contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */]])
], StaffContactPage);

//# sourceMappingURL=staff-contact.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(app, navCtrl, auth, alertCtrl, house, http) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.house = house;
        this.http = http;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.type = '';
        this.Students = [];
        this.data = {};
        var info = this.auth.getUserInfo();
        this.firstName = info['firstName'];
        this.lastName = info['lastName'];
        this.email = info['email'];
        this.type = info['type'];
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getProfileStu().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            _this.myGroup = "G".concat(_this.Students[0].g_id);
            _this.groupDescription = _this.Students[0].pro;
            _this.SID = _this.Students[0].s_id;
            _this.Picture = "https://docs.google.com/uc?id=".concat(_this.Students[0].pic);
            console.log(_this.myGroup);
            console.log(_this.groupDescription);
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    ProfilePage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    ProfilePage.prototype.changePassword = function () {
        var _this = this;
        if (this.password === null || this.password == null) {
            this.showError("No password inserted");
        }
        else if (this.password !== null) {
            if (this.password.length < 6) {
                this.showError("Please choose a password that is at least 6 characters long");
            }
            else {
                // BACKEND HERE TO SAVE PASSWORD
                var link14 = 'http://gc02team02app.azurewebsites.net/SQL/ProfileSSet.php';
                var myData14 = JSON.stringify({ s: this.SID, p: this.password });
                this.http.post(link14, myData14).subscribe(function (data) {
                    _this.data.response = data["_body"];
                }, function (error) {
                    console.log("Oooops!");
                });
                var alert_1 = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your password was changed',
                    buttons: ['OK']
                });
                alert_1.present(prompt);
                this.password = null;
            }
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content id="page4">\n    <div padding id="blueblue">\n        <button id="logout" (click)="logout()">Log out</button>\n        <img id ="profilepic" src= "{{Picture}}" style= "height: 12vh; width: 22vw;">\n        <form (ngSubmit)="changePassword()" id="passwordForm">\n            <ion-item no-lines id="myProfile-input1">\n                <ion-input [readonly]=true type="text" placeholder="{{firstName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input2">\n                <ion-input [readonly]=true type="text" placeholder="{{lastName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input3">\n                <ion-input [readonly]=true type="email" placeholder="{{email}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input4">\n                <ion-input type="password" placeholder="Enter new password" name="password" [(ngModel)]="this.password"></ion-input>\n            </ion-item>\n            <button type="submit" id="savechanges">Save password changes</button>\n        </form>\n    </div>\n    <div padding id="supervising">\n        <h6 id="myProfile-heading1" style="color:#000000;text-align:center;">\n          My Group: {{groupDescription}}\n        </h6>\n        <div id="groups">\n            <button id="button">\n                {{ myGroup }}\n            </button>\n        </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFeedbackHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more_details2_more_details2__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyFeedbackHistoryPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MyFeedbackHistoryPage(navCtrl, house, nav) {
        this.navCtrl = navCtrl;
        this.house = house;
        this.nav = nav;
        this.Students = [];
        this.groupdata = [];
        this.studentdata = [];
        this.groupIDs = [];
        this.studentN = [];
        this.StudentIDs = [];
        this.percentageresults = [];
        this.weekswithinfo = [];
        /* Do not change anything beyond this point */
        this.performanceAnnotation = ['absent', 'bad', 'average', 'good', 'excellent']; //constants do not modify
        this.performanceColor = ['black', 'red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify
        this.student;
        this.percentageresults;
        this.groupnumber;
    }
    MyFeedbackHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.GetStudentHome().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.studentN.includes(_this.str.concat(" ", _this.str2))) {
                        _this.studentN.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                        _this.groupIDs.push(_this.Students[i].g_ID);
                    }
                }
                _this.groupnumber = _this.groupIDs[0];
                _this.ID = _this.StudentIDs[0];
                _this.student = _this.studentN[0];
                for (var q in _this.Students) {
                    _this.weekswithinfo.push(_this.Students[q].s_wk);
                }
                _this.weekswithinfo.sort(function (a, b) {
                    return a - b;
                });
                for (var p in _this.weekswithinfo) {
                    for (var x in _this.Students) {
                        if (_this.Students[x].s_wk == _this.weekswithinfo[p]) {
                            _this.groupdata.push(_this.Students[x].gp);
                            _this.studentdata.push(_this.Students[x].sp);
                            _this.percentageresults.push(_this.Students[x].contr);
                        }
                    }
                }
            }
            else {
                // IF THERE ARE NO FEEDBACK FOR THAT STUDENT AND HIS TEAM HERE HERE HERE HERE HERE
            }
        });
    };
    MyFeedbackHistoryPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.groupnumber = 0;
        this.ID = 0;
        this.Students = [];
        this.groupdata = [];
        this.studentdata = [];
        this.groupIDs = [];
        this.studentN = [];
        this.StudentIDs = [];
        this.percentageresults = [];
        this.weekswithinfo = [];
        this.house.GetStudentHome().subscribe(function (dt) {
            if (dt["_body"]) {
                _this.Students = JSON.parse(dt["_body"]);
                for (var i in _this.Students) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.studentN.includes(_this.str.concat(" ", _this.str2))) {
                        _this.studentN.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                        _this.groupIDs.push(_this.Students[i].g_ID);
                    }
                }
                _this.groupnumber = _this.groupIDs[0];
                _this.ID = _this.StudentIDs[0];
                _this.student = _this.studentN[0];
                for (var q in _this.Students) {
                    _this.weekswithinfo.push(_this.Students[q].s_wk);
                }
                _this.weekswithinfo.sort(function (a, b) {
                    return a - b;
                });
                for (var p in _this.weekswithinfo) {
                    for (var x in _this.Students) {
                        if (_this.Students[x].s_wk == _this.weekswithinfo[p]) {
                            _this.groupdata.push(_this.Students[x].gp);
                            _this.studentdata.push(_this.Students[x].sp);
                            _this.percentageresults.push(_this.Students[x].contr);
                        }
                    }
                }
            }
            else {
                // IF THERE ARE NO FEEDBACK FOR THAT STUDENT AND HIS TEAM HERE HERE HERE HERE HERE
            }
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    MyFeedbackHistoryPage.prototype.groupColorSetting = function (x) {
        var indexvalue = this.groupdata[x];
        var colorName = this.performanceColor[indexvalue];
        return colorName;
    };
    MyFeedbackHistoryPage.prototype.studentColorSetting = function (x) {
        var indexvalue = this.studentdata[x];
        var studentColor = this.performanceColor[indexvalue];
        return studentColor;
    };
    MyFeedbackHistoryPage.prototype.latestWeek = function () {
        var weekIndex = this.weekswithinfo.length;
        weekIndex = weekIndex - 1;
        var latestW = this.weekswithinfo[weekIndex];
        return latestW;
    };
    MyFeedbackHistoryPage.prototype.averagePerformance = function () {
        var weekIndex = this.weekswithinfo.length;
        var sum = 0;
        for (var i = 0; i < weekIndex; i++) {
            sum = sum + parseFloat((this.groupdata[i]).toString());
        }
        sum = sum / parseFloat((weekIndex).toString());
        return sum.toFixed(1);
    };
    MyFeedbackHistoryPage.prototype.latestPerformance = function () {
        var weekIndex = this.weekswithinfo.length;
        console.log(weekIndex);
        var indexvalue = this.groupdata[weekIndex - 1];
        console.log(indexvalue);
        return this.performanceAnnotation[indexvalue];
    };
    MyFeedbackHistoryPage.prototype.goToDetails = function (week) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__more_details2_more_details2__["a" /* MoreDetailsPage2 */], {
            param1: this.ID, param2: week
        });
    };
    return MyFeedbackHistoryPage;
}());
MyFeedbackHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-feedback-history',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-feedback-history/my-feedback-history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <h4 id="feedbackSummary-heading6">\n    Group {{groupnumber}}\n  </h4>\n  <!-- Latest Feedback section -->\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n    <div>\n      <br><p style="margin:0px; outline:none;"> Latest Feedback:\n        <span class="feedbackwriting">Week </span><span class="feedbackwriting"> {{latestWeek()}} </span></p>\n    </div>\n  <hr>\n  <div id="legend">\n    <div id="lll">\n      <p class="floating" id="overallp" style="color:#000000;">\n        Current average <br> performance:\n      </p>\n      <p class="floating" id="latestp" style="color:#000000;">\n        latest performance:\n        <br>\n        <span class="feedbackwriting" id="latestperformance">{{latestPerformance()}}</span>\n      </p>\n    </div>\n    <p class="feedbackwriting" id="performance2">\n      {{averagePerformance()}} out of 4\n    </p>\n  </div>\n<!-- Weekly feedback history legend-->\n  <hr>\n  <h5 style="color:#000000;">\n    Weekly Feedback\n  </h5>\n  <div style="padding-bottom:7px;"><button class="performance darkgreen"></button> excellent <button class="performance lightgreen"></button> good <button class="performance yellow"></button> average <button class="performance red"></button> bad</div>\n  <hr>\n  <div id="feedbackSummary-container9" *ngFor="let item of weekswithinfo; let i = index">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider id="feedbackSummary-list-item-divider2" class="{{groupColorSetting(i)}}">\n        <p id="weekdiv">Week {{weekswithinfo[i]}}</p>\n        <p id="weekdiv2"><button id="feedbackSummary-button41" ion-button clear small (click)=\'goToDetails(item);\'>\n          more details\n        </button>\n        </p>\n      </ion-item-divider>\n      <!-- Weekly feedback history -->\n      <ion-item color="none" id="feedbackSummary-list-item56" (click)="setcolour();">\n        <p class="name">{{student}}</p>\n        <ion-note item-right>\n          <p><button class="performance performance2 {{studentColorSetting(i)}} "></button><span id="percentage" style="padding-left:10px"> contribution: {{ percentageresults[i] }}%</span></p>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-feedback-history/my-feedback-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MyFeedbackHistoryPage);

//# sourceMappingURL=my-feedback-history.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreDetailsPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoreDetailsPage2 = (function () {
    function MoreDetailsPage2(navCtrl, nav, house, http, http2) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.house = house;
        this.http = http;
        this.http2 = http2;
        this.groups = [];
        this.Students = [];
        this.names = [];
        this.StudentIDs = [];
        this.individualPerformances = [];
        this.individualComments = [];
        this.individualContributions = [];
        this.data = {};
        this.data2 = {};
        this.photoarray = [];
        this.photoarrayint = [];
        this.values = ['absent', 'bad', 'average', 'good', 'excellent']; // don't change
        this.SID = this.nav.get('param1');
        this.week = this.nav.get('param2');
    }
    MoreDetailsPage2.prototype.ngOnInit = function () {
        var _this = this;
        this.house.MoreDetsS().subscribe(function (dt) {
            _this.Students = JSON.parse(dt["_body"]);
            console.log(_this.Students);
            for (var i in _this.Students) {
                if (_this.Students[i].g_wk == _this.week && _this.Students[i].s_ID == _this.SID) {
                    _this.str = _this.Students[i].fname;
                    _this.str2 = _this.Students[i].lname;
                    if (!_this.names.includes(_this.str.concat(" ", _this.str2)) && _this.Students[i].s_ID == _this.SID) {
                        _this.names.push(_this.str.concat(" ", _this.str2));
                        _this.StudentIDs.push(_this.Students[i].s_ID);
                        _this.individualPerformances.push(_this.Students[i].sp);
                        _this.individualComments.push(_this.Students[i].sc);
                        _this.individualContributions.push(_this.Students[i].contr);
                        _this.groupComment = _this.Students[i].gc;
                        _this.groupPerformance = _this.Students[i].gp;
                        _this.groups.push(_this.Students[i].g_ID);
                        _this.photoarrayint.push(_this.Students[i].photo);
                    }
                }
            }
            _this.groupPerformance2 = _this.getGroupPerformance();
            _this.group = _this.groups[0];
            _this.photoarray.push(_this.photoarrayint[0]);
        });
    };
    MoreDetailsPage2.prototype.photocompiler = function (i) {
        var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]);
        return photoname;
    };
    MoreDetailsPage2.prototype.getPerformance = function (x) {
        var performance = this.individualPerformances[x];
        var value = this.values[performance];
        return value;
    };
    MoreDetailsPage2.prototype.getGroupPerformance = function () {
        var value = this.values[this.groupPerformance];
        return value;
    };
    return MoreDetailsPage2;
}());
MoreDetailsPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-details2',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details2/more-details2.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            More details\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="font-size:16px;" padding>\n  <h5>\n    Group {{group}} Week {{week}}\n  </h5>\n  <div id="groupperformance">\n    Group Performance:\n    <button class="performancebutton {{groupPerformance2}}">{{groupPerformance2}}</button>\n  </div>\n  <h6>\n    Group Comment:\n  </h6>\n  <p>"{{groupComment}}"</p>\n  <h5>Student Performance</h5>\n  <ion-list *ngFor="let name of names; let i = index; ">\n    <ion-card>\n      <div>\n        <ion-item text-wrap color="none" id="group-list-item39">\n          <ion-avatar item-left>\n            <img src="{{ photocompiler(i) }}" style="height: 12vh; width: 22vw;">\n          </ion-avatar>\n          <p id="name" style="font-size:16px;">\n            {{name}}\n          </p>\n        </ion-item>\n        <ion-item>\n          Performance: <button class="studentbutton {{getPerformance(i)}}" style="margin-right:20px"> </button>\n         {{individualContributions[i]}} % \n        </ion-item>\n        <ion-item text-wrap style ="color: grey !important">\n            {{individualComments[i]}}\n        </ion-item>\n      </div>\n    </ion-card>\n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details2/more-details2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], MoreDetailsPage2);

//# sourceMappingURL=more-details2.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
        this.userID = 0;
    }
    ShareService.prototype.setUserName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    ShareService.prototype.setUserID = function (userID) {
        this.userID = userID;
    };
    ShareService.prototype.getUserID = function () {
        return this.userID;
    };
    ShareService.prototype.getUserName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return ShareService;
}());
ShareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShareService);

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_group_group__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_page_home_page__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_more_details_more_details__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_more_details2_more_details2__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_staff_contact_staff_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_my_feedback_history_my_feedback_history__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_house_house__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_share__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__["a" /* GroupListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__["a" /* StaffContactInfoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__["a" /* RedStudentsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__["a" /* RedGroupsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__["a" /* DeadlinesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_group_group__["a" /* GroupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */],
            __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_page_home_page__["a" /* StudentHomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_more_details_more_details__["a" /* MoreDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_staff_contact_staff_contact__["a" /* StaffContactPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_my_feedback_history_my_feedback_history__["a" /* MyFeedbackHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_more_details2_more_details2__["a" /* MoreDetailsPage2 */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__["a" /* GroupListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__["a" /* StaffContactInfoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__["a" /* RedStudentsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__["a" /* RedGroupsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__["a" /* DeadlinesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_group_group__["a" /* GroupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_page_home_page__["a" /* StudentHomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_more_details_more_details__["a" /* MoreDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_staff_contact_staff_contact__["a" /* StaffContactPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_my_feedback_history_my_feedback_history__["a" /* MyFeedbackHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_more_details2_more_details2__["a" /* MoreDetailsPage2 */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__providers_share__["a" /* ShareService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_23__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_24__providers_house_house__["a" /* HouseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bn": 235,
	"./bn.js": 235,
	"./bo": 236,
	"./bo.js": 236,
	"./br": 237,
	"./br.js": 237,
	"./bs": 238,
	"./bs.js": 238,
	"./ca": 239,
	"./ca.js": 239,
	"./cs": 240,
	"./cs.js": 240,
	"./cv": 241,
	"./cv.js": 241,
	"./cy": 242,
	"./cy.js": 242,
	"./da": 243,
	"./da.js": 243,
	"./de": 244,
	"./de-at": 245,
	"./de-at.js": 245,
	"./de-ch": 246,
	"./de-ch.js": 246,
	"./de.js": 244,
	"./dv": 247,
	"./dv.js": 247,
	"./el": 248,
	"./el.js": 248,
	"./en-au": 249,
	"./en-au.js": 249,
	"./en-ca": 250,
	"./en-ca.js": 250,
	"./en-gb": 251,
	"./en-gb.js": 251,
	"./en-ie": 252,
	"./en-ie.js": 252,
	"./en-nz": 253,
	"./en-nz.js": 253,
	"./eo": 254,
	"./eo.js": 254,
	"./es": 255,
	"./es-do": 256,
	"./es-do.js": 256,
	"./es.js": 255,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 451;

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}days left\n  </div>\n</div>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__house_house__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User(firstName, lastName, email, type) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
    }
    return User;
}());

var AuthService = (function () {
    function AuthService(http, http2, http3, house) {
        this.http = http;
        this.http2 = http2;
        this.http3 = http3;
        this.house = house;
        this.combo = [];
        this.one = 1;
        this.zero = 0;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null || credentials.type === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else if (credentials.type == 'Student') {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var link = 'http://gc02team02app.azurewebsites.net/SQL/PassS.php';
                var myData = JSON.stringify({ user: credentials.email, pass: credentials.password });
                _this.http.post(link, myData).subscribe(function (dt) {
                    if (dt["_body"]) {
                        _this.combo = JSON.parse(dt["_body"]);
                        console.log(_this.combo);
                        var access = (credentials.password === _this.combo[0].pass && credentials.email === _this.combo[0].smail);
                        var firstName = _this.combo[0].fname;
                        var lastName = _this.combo[0].lname;
                        var email = _this.combo[0].smail;
                        var typee = credentials.type;
                        _this.currentUser = new User(firstName, lastName, email, typee);
                        _this.house.setSID(_this.combo[0].s_ID);
                        _this.house.setLect(_this.zero);
                        observer.next(access);
                        observer.complete();
                    }
                    else {
                        var access = false;
                        observer.next(access);
                        observer.complete();
                    }
                });
            });
        }
        else if (credentials.type == 'TA') {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var link2 = 'http://gc02team02app.azurewebsites.net/SQL/PassTA.php';
                var myData2 = JSON.stringify({ user: credentials.email, pass: credentials.password });
                _this.http2.post(link2, myData2).subscribe(function (dt) {
                    if (dt["_body"]) {
                        _this.combo = JSON.parse(dt["_body"]);
                        var access = (credentials.password === _this.combo[0].tpass && credentials.email === _this.combo[0].tmail);
                        var firstName = _this.combo[0].fname;
                        var lastName = _this.combo[0].lname;
                        var email = _this.combo[0].tmail;
                        var typee = credentials.type;
                        _this.currentUser = new User(firstName, lastName, email, typee);
                        _this.house.setTAID(_this.combo[0].t_ID);
                        _this.house.setLect(_this.zero);
                        observer.next(access);
                        observer.complete();
                    }
                    else {
                        var access = false;
                        observer.next(access);
                        observer.complete();
                    }
                });
            });
        }
        else if (credentials.type == 'Lecturer') {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var link3 = 'http://gc02team02app.azurewebsites.net/SQL/PassLE.php';
                var myData3 = JSON.stringify({ user: credentials.email, pass: credentials.password });
                _this.http3.post(link3, myData3).subscribe(function (dt) {
                    if (dt["_body"]) {
                        _this.combo = JSON.parse(dt["_body"]);
                        var access = (credentials.password === _this.combo[0].lpass && credentials.email === _this.combo[0].lmail);
                        var firstName = _this.combo[0].fname;
                        var lastName = _this.combo[0].lname;
                        var email = _this.combo[0].tlmail;
                        var typee = credentials.type;
                        _this.currentUser = new User(firstName, lastName, email, typee);
                        _this.house.setTAID(_this.combo[0].l_ID);
                        _this.house.setLect(_this.one);
                        observer.next(access);
                        observer.complete();
                    }
                    else {
                        var access = false;
                        observer.next(access);
                        observer.complete();
                    }
                });
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__house_house__["a" /* HouseProvider */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, shareService, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.shareService = shareService;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: null, password: null, type: null };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content id="page7">\n  <div padding id="blueblue">\n    <h1 id="title">Welcome to IXN TrafficLights</h1>\n    <form (ngSubmit)="login()" id="login-form">\n      <ion-item no-lines id="login-input5">\n        <ion-input type="email" placeholder="enter your username" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n      </ion-item>\n      <ion-item no-lines id="login-input6">\n        <ion-input type="password" placeholder="enter your password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n      </ion-item>\n      <ion-item no-lines id="login-select">\n          <ion-select placeholder="Login as" name="Login as" [(ngModel)]="registerCredentials.type" required>\n            <ion-option>Student</ion-option>\n            <ion-option>TA</ion-option>\n            <ion-option>Lecturer</ion-option>\n          </ion-select>\n      </ion-item>\n      <button id="login-button" ion-button color="stable" block type="submit">\n      Log in\n      </button>\n    </form>\n  </div>\n  <div>\n      <img id="logo" src="assets/img/logo.png"/>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_share__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map