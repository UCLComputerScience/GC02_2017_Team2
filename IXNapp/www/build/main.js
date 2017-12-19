webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group #\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n    \n    \n</ion-header>\n<ion-content padding id="page13">\n  <div id="weekcontrol">\n    <button class="datebar" id="group-button18" ion-button clear color="positive" (click)="previousweek()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <p class="datebar" id="date">\n      {{dates[currentdateindex]}}<br><b>{{(weeks[currentdateindex])}}</b>\n    </p>\n    <button class="datebar" id="group-button19" ion-button clear color="positive" (click)="nextweek()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="groupperformance">\n    <button class="performancebutton {{ button1 }}" (click)="buttonOneClicked()" style="background-color:#058D65">\n      excellent\n    </button>\n    <button class="{{ button2 }} performancebutton" (click)="buttonTwoClicked()" ion-button style="background-color:#7ED321">\n      good\n    </button>\n    <button class="{{ button3 }} performancebutton" (click)="buttonThreeClicked()" ion-button style="background-color:#FFCD56">\n      average\n    </button>\n    <button class="performancebutton {{button4}}"  (click)="buttonFourClicked()" ion-button style="background-color:#FF6384">\n      bad\n    </button>\n  </div>\n  <h6 id="group-heading5" style="color:#000000;">\n    Comments\n  </h6>\n  <form id="group-form6">\n    <ion-item no-lines id="group-input7">\n      <ion-input type="text" placeholder="Click to input"></ion-input>\n    </ion-item>\n  </form>\n  <h5>Student Performance</h5>\n  <ion-card id="group-card22" *ngFor="let name of names; let i = index">\n    <ion-list>\n      <ion-item color="none" id="group-list-item39">\n        <ion-avatar item-left>\n          <img src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style= "height: 12vh; width: 22vw;">\n        </ion-avatar>\n        <p id="name">\n          {{name}}\n        </p>\n      </ion-item>\n      <div>\n        <button class="studentbutton {{ studentbutton10 }}" style="background-color:#058D65" (click)="studentbuttonOneClicked(i)"></button>\n        <button class="studentbutton  {{ \'studentbutton2\'+i }}" style="background-color:#7ED321" (click)="studentbuttonTwoClicked(i)"></button>\n        <button class="studentbutton {{ \'studentbutton3\'+i }}" style="background-color:#FFCD56" (click)="studentbuttonThreeClicked(i)"></button>\n        <button class="studentbutton {{ \'studentbutton4\'+i }}" style="background-color:#FF6384" (click)="studentbuttonFourClicked(i)"></button>\n        <ion-input placeholder = "contr." id="contribution"></ion-input>\n      </div>\n      <ion-item lines>\n        <ion-input type="text" placeholder="Click to input comment"></ion-input>\n      </ion-item>\n      <ion-item no-lines id="toggleitem">\n        <ion-label id="label">Absent:</ion-label>\n        <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], GroupPage);

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(342);
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
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__["a" /* GroupListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__["a" /* StaffContactInfoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */];
    }
    return TabsControllerPage;
}());
TabsControllerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Staff contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__red_students_red_students__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width); //+"px"
    }
    HomePage.prototype.ngAfterViewInit = function () {
        console.log("Slider------------>>Input Props Set");
        this.slides.autoHeight = true;
        // this.Slides.observer = true ;
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
    HomePage.prototype.ionViewDidLoad = function () {
        this.Fred = 4;
        this.Fyellow = 6;
        this.Fgreen = 5;
        this.Fdgreen = 7;
        var donutCtx = this.doughnutCanvas.nativeElement;
        donutCtx.height = innerHeight * 0.28;
        var datax = [4, 5, 6, 8];
        var data = {
            labels: datax,
            datasets: [
                {
                    "data": datax,
                    "backgroundColor": [
                        "#ff6384",
                        "#ffcd56",
                        "#7ed321",
                        "#058d65" //dark green 
                    ]
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutCtx, {
            "type": 'doughnut',
            "data": data,
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
                },
            }
        });
        var donutCtx2 = this.doughnutCanvas2.nativeElement;
        donutCtx2.height = innerHeight * 0.28;
        var data2 = {
            labels: [
                "Excellent",
                "Good",
                "Average",
                "Bad"
            ],
            datasets: [
                {
                    "data": [4, 5, 6, 3],
                    "backgroundColor": [
                        "#ff6384",
                        "#ffcd56",
                        "#7ed321",
                        "#058d65" //dark green 
                    ]
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](donutCtx2, {
            "type": 'doughnut',
            "data": data2,
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
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas2'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2">\n    <div id="home-container11">\n        <button id="home-button43" ion-button block icon-right style="text-align:right;"\n                on-click="goToDeadlines()">\n            Deadlines \n            <ion-icon name="calendar"></ion-icon>\n        </button>\n    </div>\n    <div id="progress-section">\n    <progress-bar [progress]="loadProgress"></progress-bar>\n    </div>\n    <!--<div id="home-markdown16" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#000000;">\n            All feedback up to date\n        </p>\n    </div>-->\n    <h4 id="home-heading11" style="color:#000000;">\n        Latest Feedback\n    </h4>\n    <div>\n        <ion-slides pager="true">\n            <ion-slide>\n                <canvas #doughnutCanvas></canvas>\n                <h6 id="home-heading12" padding=20px>\n                    Groups Feedback (groups)\n                </h6>\n                <div class="spacer" style="height:10px;" id="cameraTabDefaultPage-spacer1"></div>\n                <ion-grid> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin id="greendarklabel">\n                            {{Fred}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="greenlabel">\n                            {{Fred}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="yellowlabel">\n                            {{Fyellow}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="redlabel">\n                            {{Fdgreen}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n                <div class="spacer" style="height:20px;" id="spacerline"></div>\n            </ion-slide>\n            <ion-slide>\n                <canvas #doughnutCanvas2></canvas>\n                <h6 id="home-heading12">\n                    Students Feedback\n                </h6>\n                <div class="spacer" style="height:10px;" id="cameraTabDefaultPage-spacer1"></div>\n                <ion-grid> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin id="greendarklabel">\n                            {{Fred}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="greenlabel">\n                            {{Fred}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="yellowlabel">\n                            {{Fyellow}}\n                        </ion-label>\n                        <ion-label no-padding no-margin id="redlabel">\n                            {{Fdgreen}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n                <div class="spacer" style="height:20px;" id="spacerline"></div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div id="buttonsection">\n        <ion-row id="rowbuttons">\n            <ion-col col-6 id="buttoncols">\n                <!--<div id="colButton">-->\n                <button id="redbutton" ion-button no-padding on-click="goToRedGroups()">\n                    Red Teams\n                </button>\n                <!--</div> -->\n            </ion-col>\n            <ion-col col-6 id="buttoncols">\n                <button id="redbutton" ion-button no-padding on-click="goToRedStudents()">\n                    Red Students\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n\n\n<!--\n     <ion-col col-6>\n       <div id="colButton">\n       <button id="redbutton" ion-button no-padding margin-right="5px" on-click="goToRedGroups()">\n         Red Teams\n       </button>\n\n     </ion-col>\n     <ion-col >\n       <button id="redbutton" ion-button no-padding margin-left="5px" on-click="goToRedStudents()">\n         Red Students\n       </button>\n     </ion-col>\n   </ion-row>\n</ion-content> -->'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function DeadlinesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DeadlinesPage.prototype.ngOnInit = function () {
        this.Deadlinetitles = [{ Title: "HCI Deadline", Date: "15/11/2017" }, { Title: "Final Deadline", Date: "10/01/2018" }];
        this.Deadlinedates = [{ Date: "15/11/2017" }, { Date: "10/01/2018" }];
    };
    DeadlinesPage.prototype.Date = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    };
    return DeadlinesPage;
}());
DeadlinesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1>Today\'s date:</h1>\n        </ion-col>\n        <ion-col>\n          <h1>{{Date()}}</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="spacer" style="height:20px;"></div>\n  </ion-item>\n  <ion-item *ngFor="let DL of Deadlinetitles; let DLD of Deadlinedates">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n         {{DL.Title}}\n        </ion-col>\n        <ion-col>\n          {{DL.Date}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], DeadlinesPage);

//# sourceMappingURL=deadlines.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function RedGroupsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RedGroupsPage.prototype.ngOnInit = function () {
        this.RedGroups = ["G1", "G2", "G3", "G4"];
    };
    RedGroupsPage.prototype.onClick = function () {
        this.RedWeeks = [{ Week: "Week 1", Color: 4 }, { Week: "Week 2", Color: 1 }, { Week: "Week 3", Color: 1 }, { Week: "Week 4", Color: 2 }, { Week: "Week 5", Color: 1 }];
        for (var i = 0; i < this.RedWeeks.length; i++) {
            if (this.RedWeeks[i].Color == 4) {
                this.RedWeeks[i].Color = "dark";
            }
            else if (this.RedWeeks[i].Color == 3) {
                this.RedWeeks[i].Color = "light";
            }
            else if (this.RedWeeks[i].Color == 2) {
                this.RedWeeks[i].Color = "secondary";
            }
            else if (this.RedWeeks[i].Color == 1) {
                this.RedWeeks[i].Color = "danger";
            }
        }
    };
    return RedGroupsPage;
}());
RedGroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <button ion-button color= "danger" *ngFor= "let BadG of RedGroups" (click)= "onClick()" class= "BadButton">\n          {{BadG}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<p class= "para" style="font-size:160%;" align="center">Press On a Team!</p>\n\n<ion-list>\n  <ion-item *ngFor= "let BadWeek of RedWeeks">\n    <div class= "Week">\n      <h1>\n        {{BadWeek.Week}}\n      </h1>\n    </div>\n    <button ion-button class= "stat" color= "{{BadWeek.Color}}" style= "width: 8vw; border-radius: 50%;">\n    </button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RedGroupsPage);

//# sourceMappingURL=red-groups.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_red_studant_red_studant__ = __webpack_require__(213);
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
    function RedStudentsPage(navCtrl, redstudantprovider, http) {
        this.navCtrl = navCtrl;
        this.redstudantprovider = redstudantprovider;
        this.http = http;
        this.data = {};
        this.data.fname = '';
        this.data.lname = '';
        this.data.response = '';
        this.getStudentNames();
    }
    RedStudentsPage.prototype.getStudentNames = function () {
        var _this = this;
        this.redstudantprovider.getStudentNames().subscribe(function (data) {
            _this.Students = data;
            console.log(_this.Students);
        });
    };
    RedStudentsPage.prototype.onClick = function (first, last) {
        var _this = this;
        console.log(first);
        console.log(last);
        var link = 'http://localhost/StaffContactPHP/RedStudentReceive.php';
        var myData = JSON.stringify({ studentfirstname: first, studentlastname: last });
        this.http.post(link, myData).subscribe(function (data) {
            _this.RedWeeks = JSON.parse(data["_body"]); /* data["_body"] */
            for (var i = 0; i < _this.RedWeeks.length; i++) {
                if (_this.RedWeeks[i].st_fb == 4) {
                    _this.RedWeeks[i].st_fb = "dark";
                }
                else if (_this.RedWeeks[i].st_fb == 3) {
                    _this.RedWeeks[i].st_fb = "light";
                }
                else if (_this.RedWeeks[i].st_fb == 2) {
                    _this.RedWeeks[i].st_fb = "secondary";
                }
                else if (_this.RedWeeks[i].st_fb == 1) {
                    _this.RedWeeks[i].st_fb = "danger";
                }
            }
            console.log(_this.RedWeeks);
        }, function (error) {
            console.log("Oooooops!");
        });
        this.Contribution = ["Contribution"];
    };
    return RedStudentsPage;
}());
RedStudentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <div *ngFor= "let BadStu of Students">\n      <button ion-button color= "danger" (click)="onClick(BadStu.first, BadStu.last)" class= "StudentButton" round="true">\n          {{BadStu.first}} {{BadStu.last}}\n      </button>\n      </div>\n    </ion-row>\n  </ion-scroll>\n\n  <div ng-hide= "Clicked" class= "ng-hide">\n  <p class= "para" style="font-size:160%; top-margin:-3vh;" align="center">Press On a Student!</p>\n  </div>\n\n  <p style= "margin-left:44vw; margin-bottom:-1vh;" *ngFor="let con of Contribution">{{con}}</p>\n\n<ion-list>\n  <ion-item *ngFor="let BadW of RedWeeks">\n    <div class= "Week">\n      <h1>\n        Week {{BadW.weeknum}}\n      </h1>\n    </div>\n    <button ion-button class= "stat" style= "width: 8vw; border-radius: 50%;" color= {{BadW.st_fb}}>\n    </button>\n    <h1 class= "contribution">\n      {{BadW.contr}}%\n    </h1>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_red_studant_red_studant__["a" /* RedStudantProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_red_studant_red_studant__["a" /* RedStudantProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
], RedStudentsPage);

var _a, _b, _c;
//# sourceMappingURL=red-students.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RedStudantProvider = (function () {
    function RedStudantProvider(http) {
        this.http = http;
        console.log('Hello RedStudantProvider Provider');
    }
    RedStudantProvider.prototype.getStudentNames = function () {
        return this.http.get('http://localhost/StaffContactPHP/RedStudent.php').do(function (res) { return console.log(res); }).map(function (res) { return res.json(); });
    };
    return RedStudantProvider;
}());
RedStudantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], RedStudantProvider);

//# sourceMappingURL=red-studant.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(111);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function GroupListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = ['1', '2', '7'];
        this.items2 = ['good', 'bad', 'ok'];
    }
    GroupListPage.prototype.goToFeedbackSummary = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */]);
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
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page3">\n    <div id="groupList" *ngFor="let item of items; let i = index">\n        <button class="groupbutton" ion-button color="balanced" on-click="goToFeedbackSummary()">\n            Group&nbsp; <span>{{item}}</span>&nbsp; - &nbsp;<span>{{items2[i]}}</span>&nbsp;\n        </button>\n        <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button>\n    </div>\n    <div class="spacer" style="width:300px;height:15px;" id="groupList-spacer6"></div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], GroupListPage);

//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(111);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function FeedbackSummaryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.latestperformance = "good";
        this.overallperformance = "average";
        this.latestfeedback = 4;
        this.groupnumber = "#";
        this.weekswithinfo = [1, 2, 3, 4, 5, 8];
        this.groupresults = ['lightgreen', 'lightgreen', 'darkgreen'];
        this.percentageresults = [
            [30, 30, 40],
            [34, 33, 33],
            [33, 33, 34],
            [33, 34, 33],
            [34, 33, 33],
            [33, 34, 33],
            [],
            [34, 33, 33],
            [33, 34, 33],
            [33, 33, 34]
        ];
        this.results = [
            ['red', 'yellow', 'yellow'],
            ['lightgreen', 'lightgreen', 'darkgreen'],
            [1, 2, 3],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.students = ['Samantha Watson', 'John Taylor', 'James Kirk'];
        this.colourval = "blue";
    }
    FeedbackSummaryPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__group_group__["a" /* GroupPage */]);
    };
    FeedbackSummaryPage.prototype.addfields = function () {
        var weekswithinfo = this.weekswithinfo;
        var indexx = [];
        var weekno = weekswithinfo.length;
        for (var i = 0; i < weekno; i++) {
            var weekval = weekswithinfo[i];
            if (weekval < 6) {
                indexx.push(weekval - 1);
            }
            else {
                indexx.push(weekval - 2);
            }
        }
        return indexx;
    };
    FeedbackSummaryPage.prototype.setcolour = function () {
        var val = "blue";
        return val;
    };
    return FeedbackSummaryPage;
}());
FeedbackSummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n    <h4 id="feedbackSummary-heading6">\n        Group {{groupnumber}}\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    \n    <div id="top" >\n        <div id="latestfeedback">\n            <p style="margin:0px;outline:none;" >Latest Feedback:\n                <br><span class="feedbackwriting">Week </span><span class="feedbackwriting">4</span></p>\n        </div>\n    </div>\n    <hr>\n    <div id="legend">\n        <div id="lll">\n            <p class="floating" id="overallp" style="color:#000000;">\n            Current overall <br> performance:\n            </p>\n            <p class="floating" id="latestp" style="color:#000000;">\n                latest performance:\n                <br>\n            <span class="feedbackwriting" id="latestperformance">{{latestperformance}}</span>\n            </p>\n        </div>\n            <p class="feedbackwriting" id="performance2">\n                {{overallperformance}}\n            </p>\n    </div>\n    <hr>\n    <h5 id="feedbackSummary-heading9" style="color:#000000;">\n        Weekly Feedback\n    </h5>\n    <div style="padding-bottom:7px;"><button class="performance darkgreen"></button> excellent <button class="performance lightgreen"></button> good <button class="performance yellow"></button> average <button class="performance red"></button> bad</div>\n    <hr>\n  <div id="feedbackSummary-container9" *ngFor="let item of weekswithinfo; let i = index">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider id="feedbackSummary-list-item-divider2" class="{{ groupresults[addfields()[i]] }}">\n        <p id="weekdiv">Week {{item}}</p>\n        <p id="weekdiv2"><button id="feedbackSummary-button41" ion-button clear small>\n                more details\n            </button>\n        </p> \n      </ion-item-divider>\n      <ion-item color="none" id="feedbackSummary-list-item56" *ngFor="let student of students; let j = index" (click)="setcolour();">\n          <p class="name">{{student}}</p>\n        <ion-note item-right>\n           <p><button class="performance {{results[addfields()[i]][j]}}"></button><span id="percentage" style="padding-left:10px"> {{percentageresults[addfields()[i]][j]}}%</span></p> \n        </ion-note>\n      </ion-item>\n      \n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], FeedbackSummaryPage);

//# sourceMappingURL=feedback-summary.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_staff_contak_staff_contak__ = __webpack_require__(341);
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
    function StaffContactInfoPage(navCtrl, staffcontakprovider) {
        this.navCtrl = navCtrl;
        this.staffcontakprovider = staffcontakprovider;
        this.getStaffCon();
    }
    StaffContactInfoPage.prototype.getStaffCon = function () {
        var _this = this;
        this.staffcontakprovider.getStaffCon().subscribe(function (data) { return _this.TAContact = data; });
    };
    StaffContactInfoPage.prototype.ngOnInit = function () {
        this.StaffContact = [{ "Name": "Yun Fu", "Email": "yunfu@ucl.ac.uk", "Hours": "13:00", "Location": "Malet Place" }];
    };
    return StaffContactInfoPage;
}());
StaffContactInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 style="margin-top: 6vh;">\n    Lecturer\n  </h4>\n    <ion-item no-lines *ngFor= "let StaffC of StaffContact">\n      <ion-avatar item-start>\n        <img src= "assets/img/Staff.png" style= "height: 12vh; width: 22vw; margin-left: 1.6vw;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -9vw;">\n        <li>{{StaffC.Name}}</li>\n        <li>{{StaffC.Email}}</li>\n        <li>{{StaffC.Hours}}</li>\n        <li>{{StaffC.Location}}</li>\n      </ul>\n    </ion-item>\n\n  <hr>\n\n  <h4>\n    Teaching Assistance\n  </h4>\n  \n    <ion-item no-lines *ngFor= "let TAC of TAContact">\n      <ion-avatar item-start>\n        <img class= "TAsize" src= "{{TAC.Pic}}" style= "height: 10vh; width: 18vw; margin-left: 4vw; margin-top:-6vh;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li>{{TAC.first}}</li>\n        <li>{{TAC.email}}</li>\n      </ul>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li><u>Experience:</u></li>\n        <li>{{TAC.s_exp}}</li>\n      </ul>  \n\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_staff_contak_staff_contak__["a" /* StaffContakProvider */]])
], StaffContactInfoPage);

//# sourceMappingURL=staff-contact-info.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContakProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffContakProvider = (function () {
    function StaffContakProvider(http) {
        this.http = http;
        console.log('Hello Provider');
    }
    StaffContakProvider.prototype.getStaffCon = function () {
        return this.http.get('http://localhost/StaffContactPHP/Staff%20Contact.php').do(function (res) { return console.log(res); }).map(function (res) { return res.json(); });
    };
    return StaffContakProvider;
}());
StaffContakProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], StaffContakProvider);

//# sourceMappingURL=staff-contak.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MyProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = ['G1', 'G3', 'G8'];
    }
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content id="page4">\n    <div padding id="blueblue">\n        <img id ="profilepic" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style= "height: 12vh; width: 22vw;">\n        <form id="myProfile-form3">\n            <ion-item no-lines id="myProfile-input1">\n                <ion-input type="text" placeholder="Firstname"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input2">\n                <ion-input type="text" placeholder="Lastname"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input3">\n                <ion-input type="email" placeholder="Email"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input4">\n                <ion-input type="password" placeholder="Password"></ion-input>\n            </ion-item>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button *ngFor="let item of items">\n                {{ item }}\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_group_group__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_staff_contak_staff_contak__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_red_studant_red_studant__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(207);
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
            __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_staff_contak_staff_contak__["a" /* StaffContakProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_red_studant_red_studant__["a" /* RedStudantProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(208);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 223,
	"./af.js": 223,
	"./ar": 224,
	"./ar-dz": 225,
	"./ar-dz.js": 225,
	"./ar-kw": 226,
	"./ar-kw.js": 226,
	"./ar-ly": 227,
	"./ar-ly.js": 227,
	"./ar-ma": 228,
	"./ar-ma.js": 228,
	"./ar-sa": 229,
	"./ar-sa.js": 229,
	"./ar-tn": 230,
	"./ar-tn.js": 230,
	"./ar.js": 224,
	"./az": 231,
	"./az.js": 231,
	"./be": 232,
	"./be.js": 232,
	"./bg": 233,
	"./bg.js": 233,
	"./bn": 234,
	"./bn.js": 234,
	"./bo": 235,
	"./bo.js": 235,
	"./br": 236,
	"./br.js": 236,
	"./bs": 237,
	"./bs.js": 237,
	"./ca": 238,
	"./ca.js": 238,
	"./cs": 239,
	"./cs.js": 239,
	"./cv": 240,
	"./cv.js": 240,
	"./cy": 241,
	"./cy.js": 241,
	"./da": 242,
	"./da.js": 242,
	"./de": 243,
	"./de-at": 244,
	"./de-at.js": 244,
	"./de-ch": 245,
	"./de-ch.js": 245,
	"./de.js": 243,
	"./dv": 246,
	"./dv.js": 246,
	"./el": 247,
	"./el.js": 247,
	"./en-au": 248,
	"./en-au.js": 248,
	"./en-ca": 249,
	"./en-ca.js": 249,
	"./en-gb": 250,
	"./en-gb.js": 250,
	"./en-ie": 251,
	"./en-ie.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es.js": 254,
	"./et": 256,
	"./et.js": 256,
	"./eu": 257,
	"./eu.js": 257,
	"./fa": 258,
	"./fa.js": 258,
	"./fi": 259,
	"./fi.js": 259,
	"./fo": 260,
	"./fo.js": 260,
	"./fr": 261,
	"./fr-ca": 262,
	"./fr-ca.js": 262,
	"./fr-ch": 263,
	"./fr-ch.js": 263,
	"./fr.js": 261,
	"./fy": 264,
	"./fy.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./he": 268,
	"./he.js": 268,
	"./hi": 269,
	"./hi.js": 269,
	"./hr": 270,
	"./hr.js": 270,
	"./hu": 271,
	"./hu.js": 271,
	"./hy-am": 272,
	"./hy-am.js": 272,
	"./id": 273,
	"./id.js": 273,
	"./is": 274,
	"./is.js": 274,
	"./it": 275,
	"./it.js": 275,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ky": 283,
	"./ky.js": 283,
	"./lb": 284,
	"./lb.js": 284,
	"./lo": 285,
	"./lo.js": 285,
	"./lt": 286,
	"./lt.js": 286,
	"./lv": 287,
	"./lv.js": 287,
	"./me": 288,
	"./me.js": 288,
	"./mi": 289,
	"./mi.js": 289,
	"./mk": 290,
	"./mk.js": 290,
	"./ml": 291,
	"./ml.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-tw": 337,
	"./zh-tw.js": 337
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
webpackContext.id = 443;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="login-form5">\n    <ion-list id="login-list7">\n      <ion-item id="login-input5">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input6">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <ion-item id="login-select1">\n      <ion-label>\n        Login as\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Student\n        </ion-option>\n        <ion-option>\n          TA\n        </ion-option>\n        <ion-option>\n          Lecturer\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="login-button1" ion-button color="stable" block>\n      Log in\n    </button>\n    <div class="spacer" style="height:40px;" id="login-spacer4"></div>\n  </form>\n  <img src="assets/img/5btfuKHPTWm5m0tLskbu_ScreenShot2017-11-06at14.09.26.png" style="display:block;width:50px;height:auto;margin-left:auto;" />\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 462:
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

/***/ })

},[343]);
//# sourceMappingURL=main.js.map