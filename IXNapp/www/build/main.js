webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(201);
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
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Staff contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__red_students_red_students__ = __webpack_require__(196);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
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
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <div id="home-container11">\n    <button id="home-button43" ion-button color="positive" block icon-right style="text-align:right;" on-click="goToDeadlines()">\n      >Deadlines >\n      <ion-icon name="calendar"></ion-icon>\n    </button>\n  </div>\n  <div id="home-markdown16" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      All feedback up to date\n    </p>\n  </div>\n  <h4 id="home-heading11" style="color:#000000;">\n    Latest Feedback\n  </h4>\n  <div class="spacer" style="height:100px;" id="home-spacer9"></div>\n  <h5 id="home-heading12" style="color:#000000;">\n    Teams -- Students\n  </h5>\n  <div id="home-markdown17" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      very good, good, average, bad... and number of teams/students with that state (could work with table)\n    </p>\n  </div>\n  <button id="home-button44" ion-button color="assertive" style="font-size:9px;" on-click="goToRedGroups()">\n    Teams with red feedback\n  </button>\n  <button id="home-button45" ion-button color="assertive" style="font-size:9px;" on-click="goToRedStudents()">\n    students with red feedback\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function DeadlinesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DeadlinesPage;
}());
DeadlinesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <h5 id="deadlines-heading13" style="color:#000000;font-weight:600;">\n    Weeks left until final deadline... ##\n  </h5>\n  <div class="spacer" style="width:300px;height:25px;" id="deadlines-spacer10"></div>\n  <ion-list id="deadlines-list9">\n    <ion-item color="none" id="deadlines-list-item59">\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item50">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item60">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item61">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], DeadlinesPage);

//# sourceMappingURL=deadlines.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function RedGroupsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return RedGroupsPage;
}());
RedGroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <div id="redGroups-container20">\n    <button id="redGroups-button77" ion-button color="assertive" style="border-radius:70px 70px 70px 70px;">\n      G3\n    </button>\n    <button id="redGroups-button80" ion-button color="assertive" style="border-radius:70px 70px 70px 70px;">\n      G3\n    </button>\n    <button id="redGroups-button81" ion-button color="assertive" style="border-radius:70px 70px 70px 70px;">\n      G3\n    </button>\n    <button id="redGroups-button82" ion-button color="assertive" style="border-radius:70px 70px 70px 70px;">\n      G3\n    </button>\n    <button id="redGroups-button83" ion-button color="assertive" style="border-radius:70px 70px 70px 70px;">\n      G3\n    </button>\n  </div>\n  <h5 id="redGroups-heading16" style="color:#000000;">\n    Feedback overview: Team #\n  </h5>\n  <ion-list id="redGroups-list16">\n    <ion-item-divider color="light" id="redGroups-list-item-divider3">\n      W1\n    </ion-item-divider>\n    <ion-item color="none" id="redGroups-list-item65">\n      Samantha Watson\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="redGroups-list-item66">\n      John Taylor\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="redGroups-list-item67">\n      James Kirk\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RedGroupsPage);

//# sourceMappingURL=red-groups.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function RedStudentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return RedStudentsPage;
}());
RedStudentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <h4 id="redStudents-heading15" style="color:#000000;">\n    Student Feedback History - W3\n  </h4>\n  <div id="redStudents-container14">\n    <div id="redStudents-container13">\n      <ion-list id="redStudents-list13">\n        <ion-item color="none" id="redStudents-list-item62">\n          Samantha Watson\n          <ion-note item-right></ion-note>\n        </ion-item>\n      </ion-list>\n      <button id="redStudents-button46" ion-button color="balanced" small style="font-size:20px;border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button55" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button47" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button53" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button56" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button54" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button48" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button52" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button49" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button51" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n    </div>\n  </div>\n  <div id="redStudents-container16">\n    <div id="redStudents-container15">\n      <ion-list id="redStudents-list14">\n        <ion-item color="none" id="redStudents-list-item63">\n          Samantha Watson\n          <ion-note item-right></ion-note>\n        </ion-item>\n      </ion-list>\n      <button id="redStudents-button57" ion-button color="balanced" small style="font-size:20px;border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button58" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button59" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button60" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button61" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button62" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button63" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button64" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button65" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n      <button id="redStudents-button66" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RedStudentsPage);

//# sourceMappingURL=red-students.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(199);
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
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page3">\n    <div id="groupList-container1">\n        <button id="groupList-button3" ion-button color="balanced" on-click="goToFeedbackSummary()">\n            Group&nbsp; <span>1</span>&nbsp; - &nbsp;<span>&nbsp; Project Stage</span>\n        </button>\n        <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button>\n    </div>\n    <div class="spacer" style="width:300px;height:15px;" id="groupList-spacer6"></div>\n  \n\n</ion-content>\n\nonload ....\n\nfor each groups ...\n\n\n$scope.inputs = [Group1, Group2, Group3,];\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], GroupListPage);

//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(199);
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
    }
    FeedbackSummaryPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__group_group__["a" /* GroupPage */]);
    };
    return FeedbackSummaryPage;
}());
FeedbackSummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n    <h4 id="feedbackSummary-heading6" style="color:#000000;">\n        Group <span>#</span>\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    <div id="top">\n        <div id="latestfeedback">\n            <p>Latest Feedback:\n            <br>Week <span>4</span></p>\n        </div>\n    </div>\n    <div>\n        <div>\n            <br>\n            <p id="overallp" style="color:#000000;">\n            Current overall <br> performance\n            </p>\n            <p id="latestp" style="color:#000000;">\n                latest performance:\n            <span id="latestperformance">good</span>\n            </p>\n        </div>\n    </div>\n    <div id="feedbackSummary-markdown10" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:20px;">\n      Very Good\n    </p>\n  </div>\n  <h5 id="feedbackSummary-heading9" style="color:#000000;">\n    Individual feedback forms\n  </h5>\n  <div id="feedbackSummary-container9">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider color="light" id="feedbackSummary-list-item-divider2">\n        W1\n      </ion-item-divider>\n      <ion-item color="none" id="feedbackSummary-list-item56">\n        Samantha Watson\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item57">\n        John Taylor\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item58">\n        James Kirk\n        <ion-note item-right></ion-note>\n      </ion-item>\n    </ion-list>\n    <button id="feedbackSummary-button40" ion-button clear color="positive" small>\n      Edit\n    </button>\n    <button id="feedbackSummary-button41" ion-button clear color="positive" small>\n      more details\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], FeedbackSummaryPage);

var _a;
//# sourceMappingURL=feedback-summary.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    }
    GroupPage.prototype.goBack = function (params) {
        if (!params)
            params = {};
        this.navCtrl.pop();
    };
    return GroupPage;
}());
GroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group #\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Add\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div id="group-container6">\n    <button id="group-button18" ion-button clear color="positive">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <button id="group-button19" ion-button clear color="positive">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <div id="group-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      23rd Oct - 30th Oct 2017 (Week 5)\n    </p>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="group-container7">\n    <button id="group-button22" ion-button color="balanced" style="font-size:-12px;border-radius:4px 4px 4px 4px;">\n      excellent\n    </button>\n    <button id="group-button23" ion-button color="balanced">\n      good\n    </button>\n    <button id="group-button27" ion-button color="energized">\n      average\n    </button>\n    <button id="group-button28" ion-button color="assertive">\n      bad\n    </button>\n  </div>\n  <h5 id="group-heading5" style="color:#000000;">\n    Comments\n  </h5>\n  <form id="group-form6">\n    <ion-item id="group-input7">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Click to input"></ion-input>\n    </ion-item>\n  </form>\n  <ion-card id="group-card22">\n    <ion-list>\n      <ion-item color="none" id="group-list-item39">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Firstname Lastname\n        </h2>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item-divider color="light" id="group-list-item-divider1">\n        student state and contribution\n      </ion-item-divider>\n      <div id="group-container8">\n        <button id="group-button29" ion-button color="balanced" small style="font-size:20px;border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button36" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button37" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button38" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button39" ion-button clear color="positive" small icon-right style="color:#051414;font-size:10px;">\n          Add comment\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], GroupPage);

var _a;
//# sourceMappingURL=group.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function StaffContactInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return StaffContactInfoPage;
}());
StaffContactInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h4 id="staffContactInfo-heading2" style="color:#000000;">\n    Lecturer\n  </h4>\n   <div class= "Lecturerparent">\n  <ion-item-group id="staffContactInfo-list3">\n    <ion-item color="none" id="staffContactInfo-list-item15">\n      <ion-avatar class = "lecturer" item-start>\n        <img class= "Lecturersize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png">\n      </ion-avatar>\n      <ul>\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Office hours: xxx</li>\n        <li>Office location: xxx</li>\n      </ul>\n    </ion-item>\n  </ion-item-group>\n  </div>\n  <hr>\n\n  <h4 id="staffContactInfo-heading3" style="color:#000000;">\n    Teaching Assistance\n  </h4>\n  \n<div class= "TAParent">\n  	<ion-list no-lines>\n    <ion-item color="none" id="staffContactInfo-list-item28">\n      <ion-avatar class="TAav" item-left>\n        <img class= "TAsize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png"/>\n      </ion-avatar>\n      <ul class="TAlist">\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Lab hours: xxx</li>\n        <li>Lab location: xxx</li>\n      </ul>  \n\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], StaffContactInfoPage);

//# sourceMappingURL=staff-contact-info.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    }
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <div id="blueblue">\n        <img id ="profilepic" src="assets/img/iPJmfKWCSdylgevYCJ6t_myAvatar3.png"/>\n        <form id="myProfile-form3">\n            <div class="spacer" style="height:40px;" id="myProfile-spacer2"></div>\n            <ion-item id="myProfile-input1">\n                <ion-input type="text" placeholder="Firstname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input2">\n                <ion-input type="text" placeholder="Lastname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input3">\n                <ion-input type="email" placeholder="Email"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input4">\n                <ion-input type="password" placeholder="Password"></ion-input>\n            </ion-item>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button id="myProfile-button25">G3</button>\n            <button id="myProfile-button24">G1</button>\n            <button id="myProfile-button26">G5</button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_group_group__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(191);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__["a" /* FeedbackSummaryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
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
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="login-form5">\n    <ion-list id="login-list7">\n      <ion-item id="login-input5">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input6">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <ion-item id="login-select1">\n      <ion-label>\n        Login as\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Student\n        </ion-option>\n        <ion-option>\n          TA\n        </ion-option>\n        <ion-option>\n          Lecturer\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="login-button1" ion-button color="stable" block>\n      Log in\n    </button>\n    <div class="spacer" style="height:40px;" id="login-spacer4"></div>\n  </form>\n  <img src="assets/img/5btfuKHPTWm5m0tLskbu_ScreenShot2017-11-06at14.09.26.png" style="display:block;width:50px;height:auto;margin-left:auto;" />\n</ion-content>'/*ion-inline-end:"/Users/sophia/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map