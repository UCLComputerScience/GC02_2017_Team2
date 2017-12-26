webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(61);
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
    function LoginPage(navCtrl, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content id="page7">\n  <div padding id="blueblue">\n    <h1 id="title">Welcome to IXN TrafficLights</h1>\n    <form (ngSubmit)="login()" id="login-form">\n      <ion-item no-lines id="login-input5">\n        <ion-input type="email" placeholder="enter your username" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n      </ion-item>\n      <ion-item no-lines id="login-input6">\n        <ion-input type="password" placeholder="enter your password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n      </ion-item>\n      <ion-item no-lines id="login-select">\n          <ion-select placeholder="Login as" name="Login as" [(ngModel)]="registerCredentials.type" required>\n            <ion-option>Student</ion-option>\n            <ion-option>TA</ion-option>\n            <ion-option>Lecturer</ion-option>\n          </ion-select>\n      </ion-item>\n      <button id="login-button" ion-button color="stable" block type="submit">\n      Log in\n      </button>\n    </form>\n  </div>\n  <div>\n      <img id="logo" src="assets/img/logo.png"/>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        this.buttons = ['button1', 'button2', 'button3', 'button4'];
    }
    GroupPage.prototype.ngOnInit = function () {
    };
    GroupPage.prototype.goBack = function (params) {
        if (!params)
            params = {};
        this.navCtrl.pop();
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
    GroupPage.prototype.buttonSelect = function (k) {
        this.buttonSelected = k;
    };
    GroupPage.prototype.getDescription = function (k) {
        if (k == 0) {
            return "excellent";
        }
        else if (k == 1) {
            return "good";
        }
        else if (k == 2) {
            return "average";
        }
        else if (k == 3) {
            return "bad";
        }
    };
    GroupPage.prototype.onSelect = function (selectedIndex, studentIndex) {
        this['isStudentSelected' + studentIndex] = selectedIndex;
    };
    GroupPage.prototype.getIsStudentSelected = function (i) {
        return this['isStudentSelected' + i];
    };
    return GroupPage;
}());
GroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group #\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div id="weekcontrol">\n    <button class="datebar" id="group-button18" ion-button clear color="positive" (click)="previousweek()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <p class="datebar" id="date">\n      {{dates[currentdateindex]}}\n      <br>\n      <b>{{(weeks[currentdateindex])}}</b>\n    </p>\n    <button class="datebar" id="group-button19" ion-button clear color="positive" (click)="nextweek()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="groupperformance">\n    <button *ngFor="let button of buttons; let k = index; " class="performancebutton {{ button }}" [class.highlighted]="k === buttonSelected" (click)="buttonSelect(k)">\n      {{getDescription(k)}}\n    </button>\n  </div>\n  <h6 id="group-heading5" style="color:#000000;">\n    Comments\n  </h6>\n  <form id="group-form6">\n    <ion-item lines id="group-input7">\n      <ion-textarea rows=2 type="text" placeholder="Click to input"></ion-textarea>\n    </ion-item>\n  </form>\n  <h5>Student Performance</h5>\n  <ion-list *ngFor="let name of names; let i = index; ">\n    <ion-card>\n      <div>\n        <ion-item color="none" id="group-list-item39">\n          <ion-avatar item-left>\n            <img src="http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style="height: 12vh; width: 22vw;">\n          </ion-avatar>\n          <p id="name">\n            {{name}}\n          </p>\n        </ion-item>\n        <div>\n          <button *ngFor="let button of buttons; let j = index; " class="studentbutton {{button}}" [class.highlighted]="j === getIsStudentSelected(i)" (click)="onSelect(j, i)"></button>\n          <ion-input placeholder="contr." id="contribution"></ion-input>\n        </div>\n        <ion-item lines>\n          <ion-input type="text" placeholder="Click to input comment"></ion-input>\n        </ion-item>\n        <ion-item no-lines id="toggleitem">\n          <ion-label id="label">Absent:</ion-label>\n          <ion-toggle></ion-toggle>\n        </ion-item>\n      </div>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], GroupPage);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_contact_staff_contact__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_feedback_history_my_feedback_history__ = __webpack_require__(350);
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
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Staff contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__red_students_red_students__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_house_house__ = __webpack_require__(59);
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
        this.navCtrl = navCtrl;
        this.house = house;
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
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.house.getAllRedTeam().subscribe(function (dt) {
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
        });
        this.house.getAllRedStudent().subscribe(function (dt) {
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
        });
        console.log(this.studentData);
        this.slides.autoHeight = true;
        console.log("happened");
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
        });
        this.house.getAllRedStudent().subscribe(function (dt) {
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
        });
        console.log(this.studentData);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
        console.log(this.studentData);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Adding Refresher Section -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!--Button to Deadlines Section -->\n    <div id="deadlines-section" no-padding>\n        <button id="deadlines-button" ion-button block icon-right style="text-align:right;"\n                on-click="goToDeadlines()">\n            Deadlines \n            <ion-icon name="calendar"></ion-icon>\n        </button>\n    </div>\n\n    <!--Notification for Feedback Request-->\n<div id="notification-section" no-padding no-margin >\n    <ion-card text-center id="notification" no-margin>\n        <h6 style="padding-top: 0 auto !important">Everything up to date</h6>\n    </ion-card>\n</div>\n\n    <!--Latest Feedback title section-->\n    <h4 id="home-heading11" style="color:#000000;">\n        Latest Feedback\n    </h4>\n\n    <!--Graph section with information-->\n    <div id="graph-section">\n        <ion-slides pager="true"> <!--pager for the small points-->\n            <ion-slide>\n                <canvas #doughnutCanvas></canvas>\n                <h6 padding=20px>\n                    Groups Feedback\n                </h6>\n                <div class="spacer" style="height:10px;"></div>\n\n                <ion-grid style="margin-bottom: 5px;"> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin class="greendarklabel">\n                            excellent\n                        </ion-label>\n                        <ion-label no-padding no-margin class="greenlabel">\n                            good\n                        </ion-label>\n                        <ion-label no-padding no-margin class="yellowlabel">\n                            average\n                        </ion-label>\n                        <ion-label no-padding no-margin class="redlabel">\n                            danger\n                        </ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[3]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[2]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[1]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{groupData[0]}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n\n                <div class="spacer" style="height:5px;" id="spacerline"></div>\n            </ion-slide>\n            <ion-slide>\n                <canvas #doughnutCanvasS></canvas>\n                <h6 id="home-heading12">\n                    Students Feedback\n                </h6>\n                <div class="spacer" style="height:10px;"></div>\n\n                <ion-grid style="margin-bottom: 5px;"> <!--can add no-padding no-margin to reduce gap between title and legend -->\n                    <ion-row>\n                        <ion-label no-padding no-margin class="greendarklabel">\n                            excellent\n                        </ion-label>\n                        <ion-label no-padding no-margin class="greenlabel">\n                            good\n                        </ion-label>\n                        <ion-label no-padding no-margin class="yellowlabel">\n                            average\n                        </ion-label>\n                        <ion-label no-padding no-margin class="redlabel">\n                            danger\n                        </ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[3]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[2]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[1]}}\n                        </ion-label>\n                        <ion-label class="legend-number" no-padding no-margin >\n                            {{studentData[0]}}\n                        </ion-label>\n                    </ion-row>\n                </ion-grid>\n\n                <div class="spacer" style="height:5px;"></div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div id="buttonsection">\n        <ion-row class="rowbuttons">\n            <ion-col col-6>\n                <button class="redbutton" ion-button no-padding on-click="goToRedGroups()">\n                    Red Teams\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button class="redbutton" ion-button no-padding on-click="goToRedStudents()">\n                    Red Students\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_house_house__["a" /* HouseProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1>Today\'s date:</h1>\n        </ion-col>\n        <ion-col>\n          <h1>{{Date()}}</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="spacer" style="height:20px;"></div>\n  </ion-item>\n  <ion-item *ngFor="let DL of Deadlinetitles; let DLD of Deadlinedates">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n         {{DL.Title}}\n        </ion-col>\n        <ion-col>\n          {{DL.Date}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DeadlinesPage);

//# sourceMappingURL=deadlines.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_house_house__ = __webpack_require__(59);
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
        });
    };
    RedGroupsPage.prototype.onClick = function (gid) {
        var _this = this;
        this.RWeeks = [];
        this.clicked = true;
        this.house.getAllRedTeam().subscribe(function (dt2) {
            _this.Weeks = JSON.parse(dt2["_body"]);
            for (var i in _this.Weeks) {
                if (_this.Weeks[i].g_id == gid) {
                    _this.RWeeks.push(_this.Weeks[i]);
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
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RGroups == 0"></ion-spinner>\n    <ion-row nowrap class= "scroller" *ngIf="RGroups != 0">\n      <button ion-button color= "danger" *ngFor= "let BadG of RGroups" (click)= "onClick(BadG.g_id)" class= "BadButton">\n          G{{BadG.g_id}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<p class= "para" style="font-size:160%;" align="center">Press On a Team!</p>\n\n<ion-spinner name="dots" style= "margin-left:41vw;" *ngIf="RWeeks == 0 && clicked"></ion-spinner>\n<ion-list *ngIf="RWeekds != 0">\n  <ion-item *ngFor= "let BadWeek of RWeeks">\n    <div class= "Week">\n      <h1>\n        Week {{BadWeek.weeknum}}\n      </h1>\n    </div>\n    <button ion-button class= "stat" color= "{{BadWeek.g_fb}}" style= "width: 8vw; border-radius: 50%;">\n    </button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RedGroupsPage);

//# sourceMappingURL=red-groups.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_house_house__ = __webpack_require__(59);
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
        });
    };
    RedStudentsPage.prototype.onClick = function (first, last) {
        var _this = this;
        this.RWeeks = [];
        this.clicked = true;
        this.house.getAllRedStudent().subscribe(function (dt2) {
            _this.Weeks = JSON.parse(dt2["_body"]);
            for (var i in _this.Weeks) {
                if (_this.Weeks[i].first == first && _this.Weeks[i].last == last) {
                    _this.RWeeks.push(_this.Weeks[i]);
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
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RStudents == 0"></ion-spinner>\n    <ion-row nowrap class= "scroller" *ngIf="RStudents != 0">\n      <div *ngFor= "let BadStu of RStudents">\n      <button ion-button color= "danger" (click)="onClick(BadStu.first, BadStu.last)" class= "StudentButton" round="true">\n          {{BadStu.first}} {{BadStu.last}}\n      </button>\n      </div>\n    </ion-row>\n  </ion-scroll>\n\n  <div ng-hide= "Clicked" class= "ng-hide">\n  <p class= "para" style="font-size:160%; top-margin:-3vh;" align="center">Press On a Student!</p>\n  </div>\n\n  <p style= "margin-left:44vw; margin-bottom:-1vh;" *ngFor="let con of Contribution">{{con}}</p>\n\n<ion-spinner name="dots" style= "margin-left:35.5vw;" *ngIf="RWeeks == 0 && clicked"></ion-spinner>\n<ion-list *ngIf="RWeeks != 0">\n  <ion-item *ngFor="let BadW of RWeeks">\n    <div class= "Week">\n      <h1>\n        Week {{BadW.weeknum}}\n      </h1>\n    </div>\n    <button ion-button class= "stat" style= "width: 8vw; border-radius: 50%;" color= {{BadW.st_fb}}>\n    </button>\n    <h1 class= "contribution">\n      {{BadW.contr}}%\n    </h1>\n    <p style="font-size:70%; margin-left: 40.5vw;">\n      Contribution\n    </p>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_house_house__["a" /* HouseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RedStudentsPage);

//# sourceMappingURL=red-students.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(115);
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
        this.items2 = ['excellent', 'good', 'average'];
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
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding id="page3">\n    <div class="spacer" style="width:300px;height: 20px;" id="groupList-spacer6"></div>\n    <div class="section" *ngFor="let item of items; let i = index">\n        <button ion-button class="groupbutton {{items2[i]}}" on-click="goToFeedbackSummary()">\n            <span class="button-inner">\n                <ion-item class="background {{items2[i]}}" no-lines>\n                    <ion-row>\n                        <ion-col>\n                            Group&nbsp; <span>{{item}}</span>\n                        </ion-col>\n                        <ion-col>\n                        </ion-col>\n                        <ion-col>\n                            <span id="hello">{{items2[i]}}</span>&nbsp;\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </span>\n        </button>\n     <!-- <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button> -->\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], GroupListPage);

//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(115);
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
        /* Change this data for backend */
        this.students = ['Samantha Watson', 'John Taylor', 'James Kirk'];
        this.weekswithinfo = [1, 2, 3, 4, 5, 8];
        this.groupdata = [4, 4, 3, 4, 4, 3]; //group performance history 
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
            [1, 4, 3],
            [2, 3, 4],
            [1, 2, 3],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        /* Do not modify below here */
        this.performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
        this.performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify
        this.colourval = "blue";
    }
    FeedbackSummaryPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__group_group__["a" /* GroupPage */]);
    };
    FeedbackSummaryPage.prototype.latestWeek = function () {
        var weekIndex = this.weekswithinfo.length;
        weekIndex = weekIndex - 1;
        var latestW = this.weekswithinfo[weekIndex];
        return latestW;
    };
    FeedbackSummaryPage.prototype.averagePerformance = function () {
        var weekIndex = this.weekswithinfo.length;
        var sum = 0;
        for (var i = 0; i < weekIndex; i++) {
            sum = sum + this.groupdata[i];
        }
        sum = sum / weekIndex;
        return sum.toFixed(1);
    };
    FeedbackSummaryPage.prototype.latestPerformance = function () {
        var weekIndex = this.weekswithinfo.length;
        var indexvalue = this.groupdata[weekIndex - 1];
        return this.performanceAnnotation[indexvalue];
    };
    FeedbackSummaryPage.prototype.groupColorSetting = function (x) {
        var value = this.groupdata[x];
        var indexvalue = value - 1;
        var colorName = this.performanceColor[indexvalue];
        return colorName;
    };
    FeedbackSummaryPage.prototype.studentColorSetting = function (x, y) {
        var indexvalue = this.results[x][y] - 1;
        var studentColor = this.performanceColor[indexvalue];
        return studentColor;
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
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n    <h4 id="feedbackSummary-heading6">\n        Group {{groupnumber}}\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    \n    <div id="top" >\n        <div id="latestfeedback">\n            <p style="margin:0px;outline:none;" >Latest Feedback:\n                <br><span class="feedbackwriting">Week </span><span class="feedbackwriting">4</span></p>\n        </div>\n    </div>\n    <hr>\n    <div id="legend">\n        <div id="lll">\n          <p class="floating" id="overallp" style="color:#000000;">\n            Current average <br> performance:\n          </p>\n          <p class="floating" id="latestp" style="color:#000000;">\n            latest performance:\n            <br>\n            <span class="feedbackwriting" id="latestperformance">{{latestPerformance()}}</span>\n          </p>\n        </div>\n        <p class="feedbackwriting" id="performance2">\n          {{averagePerformance()}} out of 4\n        </p>\n      </div>\n    <hr>\n    <h5 id="feedbackSummary-heading9" style="color:#000000;">\n        Weekly Feedback\n    </h5>\n    <div style="padding-bottom:7px;"><button class="performance darkgreen"></button> excellent <button class="performance lightgreen"></button> good <button class="performance yellow"></button> average <button class="performance red"></button> bad</div>\n    <hr>\n  <div id="feedbackSummary-container9" *ngFor="let item of weekswithinfo; let i = index">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider id="feedbackSummary-list-item-divider2" class="{{ groupColorSetting(i) }}">\n        <p id="weekdiv">Week {{weekswithinfo[i]}}</p>\n        <p id="weekdiv2"><button id="feedbackSummary-button41" ion-button clear small>\n                more details\n            </button>\n        </p> \n      </ion-item-divider>\n      <ion-item color="none" id="feedbackSummary-list-item56" *ngFor="let student of students; let j = index" (click)="setcolour();">\n          <p class="name">{{student}}</p>\n        <ion-note item-right>\n           <p><button class="performance {{studentColorSetting(i, j)}}"></button><span id="percentage" style="padding-left:10px"> contribution: {{ percentageresults[i][j] }}%</span></p> \n        </ion-note>\n      </ion-item>\n      \n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], FeedbackSummaryPage);

//# sourceMappingURL=feedback-summary.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_staff_contak_staff_contak__ = __webpack_require__(345);
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
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 style="margin-top: 6vh;">\n    Lecturer\n  </h4>\n    <ion-item no-lines *ngFor= "let StaffC of StaffContact">\n      <ion-avatar item-start>\n        <img src= "assets/img/Staff.png" style= "height: 12vh; width: 22vw; margin-left: 1.6vw;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -9vw;">\n        <li>{{StaffC.Name}}</li>\n        <li>{{StaffC.Email}}</li>\n        <li>{{StaffC.Hours}}</li>\n        <li>{{StaffC.Location}}</li>\n      </ul>\n    </ion-item>\n\n  <hr>\n\n  <h4>\n    Teaching Assistance\n  </h4>\n  \n    <ion-item no-lines *ngFor= "let TAC of TAContact">\n      <ion-avatar item-start>\n        <img class= "TAsize" src= "{{TAC.Pic}}" style= "height: 10vh; width: 18vw; margin-left: 4vw; margin-top:-6vh;">\n      </ion-avatar>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li>{{TAC.first}}</li>\n        <li>{{TAC.email}}</li>\n      </ul>\n      <ul style="list-style-type:none; margin-left: -7vw;">\n        <li><u>Experience:</u></li>\n        <li>{{TAC.s_exp}}</li>\n      </ul>  \n\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_staff_contak_staff_contak__["a" /* StaffContakProvider */]])
], StaffContactInfoPage);

//# sourceMappingURL=staff-contact-info.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContakProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(219);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(113);
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
    function MyProfilePage(app, navCtrl, auth) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.auth = auth;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.type = '';
        this.items = ['G1', 'G3', 'G8'];
        var info = this.auth.getUserInfo();
        this.firstName = info['firstName'];
        this.lastName = info['lastName'];
        this.email = info['email'];
        this.type = info['type'];
    }
    MyProfilePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content id="page4">\n    <div padding id="blueblue">\n        <button id="logout" (click)="logout()">Log out</button>\n        <img id ="profilepic" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style= "height: 12vh; width: 22vw;">\n        <form id="myProfile-form3">\n            <ion-item no-lines id="myProfile-input1">\n                <ion-input type="text" placeholder="{{firstName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input2">\n                <ion-input type="text" placeholder="{{lastName}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input3">\n                <ion-input type="email" placeholder="{{email}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines id="myProfile-input4">\n                <ion-input type="password" placeholder="Password"></ion-input>\n            </ion-item>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button *ngFor="let item of items">\n                {{ item }}\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
    function StudentHomePage(navCtrl) {
        this.navCtrl = navCtrl;
        //variables to change for data retrieval
        this.groupLatest = [3]; //latest group performance 
        this.studentLatest = [3]; //latest student performance 
        this.contribution = [33]; //latest student contribution 
        this.weekindex = [4]; // latest week index
        this.student = ['Samantha Watson']; //student name 
        this.studentdata = [3, 2, 2, 1, 4, 3, 2]; //student performance history
        this.groupdata = [4, 4, 3, 4, 3, 4, 3]; //group performance history 
        /*Not to change after here*/
        this.performanceDescription = ['bad', 'average', 'good', 'excellent']; //these are constants
        this.performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //these are constants
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width);
        this.student;
        this.contribution;
        this.weekindex;
        this.performanceDescription;
    }
    StudentHomePage.prototype.Date = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
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
    StudentHomePage.prototype.ionViewDidLoad = function () {
        var lineCTX = this.lineCanvas.nativeElement;
        lineCTX.height = innerHeight * 0.4;
        lineCTX.width = innerWidth;
        var data = {
            labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
            datasets: [
                {
                    label: 'me',
                    data: this.studentdata,
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
                    data: this.groupdata,
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
    };
    return StudentHomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], StudentHomePage.prototype, "lineCanvas", void 0);
StudentHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-page',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home-page/home-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n    <div id="notification-section" no-padding no-margin >\n        <ion-card text-center id="notification" no-padding no-margin>\n            <h6 style="color: white">Today\'s date: {{Date()}}</h6>\n        </ion-card>\n    </div>\n    <div class="spacer" style="height:2% ;" id="spacerline"></div>\n    \n    <div id="deadlines-section" no-padding>\n        <button id="deadlines-button" ion-button block icon-right style="text-align:right;"\n                on-click="goToDeadlines()">\n            Deadlines \n            <ion-icon name="calendar"></ion-icon>\n        </button>\n    </div>\n\n    \n    <div class="spacer" style="height:3% ;" id="spacerline"></div>\n    <div id="header-section">\n    <h4>My Overview</h4>\n    </div>\n    <div class="spacer" style="height:5%; " id="spacerline"></div>\n        \n    <ion-card class="graphCard" style="border-top: 5px solid #00A8FF;" padding no-margin>\n        <ion-card-content>\n          <canvas #lineCanvas></canvas>\n        </ion-card-content>\n    </ion-card>\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n  <div id="header-section">\n      <h4>Latest Feedback</h4>\n      </div>\n  <div class="spacer" style="height:5%; " id="spacerline"></div>\n    <div style="height: 30vh;">\n        <ion-card no-padding no-margin style="height: 40% !important;"> <!-- important to position the card in the center -->\n            <ion-card-content no-padding no-margin> <!-- important to fill the content of the card with the group performance color -->\n                <ion-item-divider style="width: 100% !important; height: 2vh !important; color: white;" class="{{ performanceColor[latestPerformance()] }}">\n                    <p id="weekdiv" style="color: white;">Week {{weekindex}} group peformance: </p>\n                    <p style="float: right; color: white;"> {{ performanceDescription[latestPerformance()] }} </p>\n                  </ion-item-divider>\n                  <ion-item color="none" id="feedbackSummary-list-item56">\n                      <p class="name">{{student}}</p>\n                      <ion-note item-right>\n                       <p><button class="performance {{ performanceColor[studentLatestPerformance()] }}"></button><span id="percentage" style="padding-left:10px"> {{contribution}}% (contribution)</span></p>\n                      </ion-note>\n                    </ion-item>\n              </ion-card-content>\n            </ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home-page/home-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], StudentHomePage);

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function StaffContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StaffContactPage.prototype.ngOnInit = function () {
        this.StaffContact = [{ Name: "Yun Fu", Email: "yunfu@ucl.ac.uk", Hours: "13:00", Location: "Malet Place" }];
        this.TAContact = [{ Name: "John Taylor", Email: "John@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Ionic" }, { Name: "Dominic Twain", Email: "Dominic@ucl.ac.uk", Hours: "16:00", Location: "Malet Place", Exp: "Databases" }, { Name: "Ashley Shana", Email: "Ashley@ucl.ac.uk", Hours: "14:00", Location: "Malet Place", Exp: "Python" }];
    };
    return StaffContactPage;
}());
StaffContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-staff-contact',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact/staff-contact.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 style="margin-top: 6vh;">\n    Lecturer\n  </h4>\n  <ion-item no-lines *ngFor= "let StaffC of StaffContact">\n    <ion-avatar item-start>\n      <img src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style= "height: 12vh; width: 22vw;">\n    </ion-avatar>\n    <ul style="list-style-type:none; margin-left: -6vw;">\n      <li>{{StaffC.Name}}</li>\n      <li>{{StaffC.Email}}</li>\n      <li>{{StaffC.Hours}}</li>\n      <li>{{StaffC.Location}}</li>\n    </ul>\n  </ion-item>\n\n  <hr>\n\n  <h4>\n    Teaching Assistance\n  </h4>\n\n  <ion-item no-lines *ngFor= "let TAC of TAContact">\n    <ion-avatar item-start>\n      <img class= "TAsize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style= "height: 10vh; width: 18vw; margin-left: 4vw; margin-top:-13vh;">\n    </ion-avatar>\n    <ul style="list-style-type:none; margin-left: -7vw;">\n      <li>{{TAC.Name}}</li>\n      <li>{{TAC.Email}}</li>\n    </ul>\n    <ul style="list-style-type:none; margin-left: -7vw;">\n      <li><u>Lab Hours:</u></li>\n      <li>{{TAC.Hours}}</li>\n      <li><u>Lab Location:</u></li>\n      <li>{{TAC.Location}}</li>\n      <li><u>Experience:</u></li>\n      <li>{{TAC.Exp}}</li>\n    </ul>\n\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact/staff-contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], StaffContactPage);

//# sourceMappingURL=staff-contact.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <div id="blueblue">\n    <img id ="profilepic" src="assets/img/iPJmfKWCSdylgevYCJ6t_myAvatar3.png"/>\n    <form id="myProfile-form3">\n      <div class="spacer" style="height:40px;" id="myProfile-spacer2"></div>\n      <ion-item id="myProfile-input1">\n        <ion-input type="text" placeholder="Firstname"></ion-input>\n      </ion-item>\n      <ion-item id="myProfile-input2">\n        <ion-input type="text" placeholder="Lastname"></ion-input>\n      </ion-item>\n      <ion-item id="myProfile-input3">\n        <ion-input type="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item id="myProfile-input4">\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n    </form>\n  </div>\n  <div id="supervising">\n    <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n      Supervising groups\n    </h5>\n    <div id="groups">\n      <button *ngFor="let item of items">\n        {{ item }}\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFeedbackHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function MyFeedbackHistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
        /* Data retrieval (only this section to modify with data) */
        this.groupnumber = 4; //group number
        this.student = 'Samantha Watson'; //student name
        this.weekswithinfo = [1, 2, 3, 4, 5, 8]; //week numbers of those performances
        this.studentdata = [3, 2, 2, 1, 4, 3, 2]; //student performance history
        this.groupdata = [4, 4, 3, 4, 4, 3]; //group performance history 
        this.percentageresults = [30, 33, 40, 33, 34, 30]; //contribution percentages
        /* Do not change anything beyond this point */
        this.performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
        this.performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify
        this.student;
        this.percentageresults;
        this.groupnumber;
    }
    MyFeedbackHistoryPage.prototype.groupColorSetting = function (x) {
        var value = this.groupdata[x];
        var indexvalue = value - 1;
        var colorName = this.performanceColor[indexvalue];
        return colorName;
    };
    MyFeedbackHistoryPage.prototype.studentColorSetting = function (x) {
        var indexvalue = this.studentdata[x] - 1;
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
            sum = sum + this.groupdata[i];
        }
        sum = sum / weekIndex;
        return sum.toFixed(1);
    };
    MyFeedbackHistoryPage.prototype.latestPerformance = function () {
        var weekIndex = this.weekswithinfo.length;
        var indexvalue = this.groupdata[weekIndex - 1];
        return this.performanceAnnotation[indexvalue];
    };
    return MyFeedbackHistoryPage;
}());
MyFeedbackHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-feedback-history',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-feedback-history/my-feedback-history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 id="feedbackSummary-heading6">\n    Group {{groupnumber}}\n  </h4>\n  <!-- Latest Feedback section -->\n  <div class="spacer" style="height:3%;" id="spacerline"></div>\n    <div>\n      <br><p style="margin:0px; outline:none;"> Latest Feedback:\n        <span class="feedbackwriting">Week </span><span class="feedbackwriting"> {{latestWeek()}} </span></p>\n    </div>\n  <hr>\n  <div id="legend">\n    <div id="lll">\n      <p class="floating" id="overallp" style="color:#000000;">\n        Current average <br> performance:\n      </p>\n      <p class="floating" id="latestp" style="color:#000000;">\n        latest performance:\n        <br>\n        <span class="feedbackwriting" id="latestperformance">{{latestPerformance()}}</span>\n      </p>\n    </div>\n    <p class="feedbackwriting" id="performance2">\n      {{averagePerformance()}} out of 4\n    </p>\n  </div>\n<!-- Weekly feedback history legend-->\n  <hr>\n  <h5 style="color:#000000;">\n    Weekly Feedback\n  </h5>\n  <div style="padding-bottom:7px;"><button class="performance darkgreen"></button> excellent <button class="performance lightgreen"></button> good <button class="performance yellow"></button> average <button class="performance red"></button> bad</div>\n  <hr>\n  <div id="feedbackSummary-container9" *ngFor="let item of weekswithinfo; let i = index">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider id="feedbackSummary-list-item-divider2" class="{{groupColorSetting(i)}}">\n        <p id="weekdiv">Week {{weekswithinfo[i]}}</p>\n        <p id="weekdiv2"><button id="feedbackSummary-button41" ion-button clear small>\n          more details\n        </button>\n        </p>\n      </ion-item-divider>\n      <!-- Weekly feedback history -->\n      <ion-item color="none" id="feedbackSummary-list-item56" (click)="setcolour();">\n        <p class="name">{{student}}</p>\n        <ion-note item-right>\n          <p><button class="performance {{studentColorSetting(i)}} "></button><span id="percentage" style="padding-left:10px"> contribution: {{ percentageresults[i] }}%</span></p>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-feedback-history/my-feedback-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MyFeedbackHistoryPage);

//# sourceMappingURL=my-feedback-history.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_group_group__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_page_home_page__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_more_details_more_details__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_staff_contact_staff_contact__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_feedback_history_my_feedback_history__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_staff_contak_staff_contak__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_house_house__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(212);
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
            __WEBPACK_IMPORTED_MODULE_18__pages_staff_contact_staff_contact__["a" /* StaffContactPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_my_feedback_history_my_feedback_history__["a" /* MyFeedbackHistoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */]
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
            __WEBPACK_IMPORTED_MODULE_18__pages_staff_contact_staff_contact__["a" /* StaffContactPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_my_feedback_history_my_feedback_history__["a" /* MyFeedbackHistoryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_staff_contak_staff_contak__["a" /* StaffContakProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_24__providers_house_house__["a" /* HouseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(113);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bn": 238,
	"./bn.js": 238,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es.js": 258,
	"./et": 260,
	"./et.js": 260,
	"./eu": 261,
	"./eu.js": 261,
	"./fa": 262,
	"./fa.js": 262,
	"./fi": 263,
	"./fi.js": 263,
	"./fo": 264,
	"./fo.js": 264,
	"./fr": 265,
	"./fr-ca": 266,
	"./fr-ca.js": 266,
	"./fr-ch": 267,
	"./fr-ch.js": 267,
	"./fr.js": 265,
	"./fy": 268,
	"./fy.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-latn": 271,
	"./gom-latn.js": 271,
	"./he": 272,
	"./he.js": 272,
	"./hi": 273,
	"./hi.js": 273,
	"./hr": 274,
	"./hr.js": 274,
	"./hu": 275,
	"./hu.js": 275,
	"./hy-am": 276,
	"./hy-am.js": 276,
	"./id": 277,
	"./id.js": 277,
	"./is": 278,
	"./is.js": 278,
	"./it": 279,
	"./it.js": 279,
	"./ja": 280,
	"./ja.js": 280,
	"./jv": 281,
	"./jv.js": 281,
	"./ka": 282,
	"./ka.js": 282,
	"./kk": 283,
	"./kk.js": 283,
	"./km": 284,
	"./km.js": 284,
	"./kn": 285,
	"./kn.js": 285,
	"./ko": 286,
	"./ko.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mr": 296,
	"./mr.js": 296,
	"./ms": 297,
	"./ms-my": 298,
	"./ms-my.js": 298,
	"./ms.js": 297,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 449;

/***/ }),

/***/ 468:
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
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}days left\n  </div>\n</div>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function MoreDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
        this.individualPerformances = ['good', 'good', 'average'];
        this.individualComments = ['good work', '', ''];
        this.groupPerformance = 'average';
        this.groupComment = 'The group progressed from last week but needs to work on the prototype more';
    }
    return MoreDetailsPage;
}());
MoreDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-details',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details/more-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            More details\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h5>\n    Group # Week #\n  </h5>\n  <div id="groupperformance">\n    Group Performance:\n    <button class="performancebutton {{groupPerformance}}">{{groupPerformance}}</button>\n  </div>\n  <h6>\n    Comment\n  </h6>\n  <p>{{groupComment}}</p>\n  <h5>Student Performance</h5>\n  <ion-list *ngFor="let name of names; let i = index; ">\n    <ion-card>\n      <div>\n        <ion-item color="none" id="group-list-item39">\n          <ion-avatar item-left>\n            <img src="http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png" style="height: 12vh; width: 22vw;">\n          </ion-avatar>\n          <p id="name">\n            {{name}}\n          </p>\n        </ion-item>\n        <div>\n          <button class="studentbutton {{individualPerformances[i]}}"> </button>\n          <ion-input placeholder="contr." id="contribution"></ion-input>\n        </div>\n        <p>\n            {{individualComments[i]}}\n        <p>\n      </div>\n    </ion-card>\n  </ion-list>\n    \n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/more-details/more-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MoreDetailsPage);

//# sourceMappingURL=more-details.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(45);
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
    function HouseProvider(http, http2) {
        this.http = http;
        this.http2 = http2;
        this.TAID = 1; /* I assume I know this here */
        console.log('Hello HouseProvider Provider');
    }
    HouseProvider.prototype.getAllRedStudent = function () {
        var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
        var myData1 = JSON.stringify({ teachID: this.TAID });
        return this.http.post(link1, myData1);
    };
    HouseProvider.prototype.getAllRedTeam = function () {
        var link2 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php';
        var myData2 = JSON.stringify({ teachID: this.TAID });
        return this.http2.post(link2, myData2);
        /* return this.http.get('http://gc02team02app.azurewebsites.net/SQL/RedGroup.php'); */
    };
    return HouseProvider;
}());
HouseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], HouseProvider);

//# sourceMappingURL=house.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null || credentials.type === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // REQUEST BACKEND HERE!
                var userEmail = "email";
                var userPassword = "pass";
                var access = (credentials.password === userPassword && credentials.email === userEmail);
                //  STORE BACKEND INFORMATION HERE
                var firstName = 'Samantha';
                var lastName = 'Watson';
                var email = 's.watson@ucl.ac.uk';
                var typee = credentials.type;
                _this.currentUser = new User(firstName, lastName, email, typee);
                observer.next(access);
                observer.complete();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map