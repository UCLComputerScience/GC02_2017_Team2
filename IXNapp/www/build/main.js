webpackJsonp([0],{

/***/ 106:
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
<<<<<<< HEAD
        selector: 'page-group',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group #\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Add\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div id="group-container6">\n    <button id="group-button18" ion-button clear color="positive">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <button id="group-button19" ion-button clear color="positive">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <div id="group-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      23rd Oct - 30th Oct 2017 (Week 5)\n    </p>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="group-container7">\n    <button id="group-button22" ion-button color="balanced" style="font-size:-12px;border-radius:4px 4px 4px 4px;">\n      excellent\n    </button>\n    <button id="group-button23" ion-button color="balanced">\n      good\n    </button>\n    <button id="group-button27" ion-button color="energized">\n      average\n    </button>\n    <button id="group-button28" ion-button color="assertive">\n      bad\n    </button>\n  </div>\n  <h5 id="group-heading5" style="color:#000000;">\n    Comments\n  </h5>\n  <form id="group-form6">\n    <ion-item id="group-input7">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Click to input"></ion-input>\n    </ion-item>\n  </form>\n  <ion-card id="group-card22">\n    <ion-list>\n      <ion-item color="none" id="group-list-item39">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Firstname Lastname\n        </h2>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item-divider color="light" id="group-list-item-divider1">\n        student state and contribution\n      </ion-item-divider>\n      <div id="group-container8">\n        <button id="group-button29" ion-button color="balanced" small style="font-size:20px;border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button36" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button37" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button38" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button39" ion-button clear color="positive" small icon-right style="color:#051414;font-size:10px;">\n          Add comment\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
=======
        selector: 'page-group',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons start>\n      <button ion-button on-click="goBack();">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Group #\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Add\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div id="group-container6">\n    <button id="group-button18" ion-button clear color="positive">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <button id="group-button19" ion-button clear color="positive">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </div>\n  <div id="group-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      23rd Oct - 30th Oct 2017 (Week 5)\n    </p>\n  </div>\n  <h5 id="group-heading4" style="color:#000000;">\n    Group Performance\n  </h5>\n  <div id="group-container7">\n    <button id="group-button22" ion-button color="balanced" style="font-size:-12px;border-radius:4px 4px 4px 4px;">\n      excellent\n    </button>\n    <button id="group-button23" ion-button color="balanced">\n      good\n    </button>\n    <button id="group-button27" ion-button color="energized">\n      average\n    </button>\n    <button id="group-button28" ion-button color="assertive">\n      bad\n    </button>\n  </div>\n  <h5 id="group-heading5" style="color:#000000;">\n    Comments\n  </h5>\n  <form id="group-form6">\n    <ion-item id="group-input7">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Click to input"></ion-input>\n    </ion-item>\n  </form>\n  <ion-card id="group-card22">\n    <ion-list>\n      <ion-item color="none" id="group-list-item39">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Firstname Lastname\n        </h2>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item-divider color="light" id="group-list-item-divider1">\n        student state and contribution\n      </ion-item-divider>\n      <div id="group-container8">\n        <button id="group-button29" ion-button color="balanced" small style="font-size:20px;border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button36" ion-button color="balanced" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button37" ion-button color="energized" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button38" ion-button color="assertive" small style="border-radius:80px 80px 80px 80px;"></button>\n        <button id="group-button39" ion-button clear color="positive" small icon-right style="color:#051414;font-size:10px;">\n          Add comment\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group/group.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], GroupPage);

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_contact_info_staff_contact_info__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(328);
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
<<<<<<< HEAD
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Staff contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
=======
        selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feedback" tabIcon="stats" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Staff contacts" tabIcon="contacts" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/tabs-controller/tabs-controller.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deadlines_deadlines__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__red_groups_red_groups__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__red_students_red_students__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(398);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
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
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                datasets: [{
                        label: '# of Votes',
                        labels: ["Red", "Blue", "Yellow", "Green"],
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.doughnutCanvas2.nativeElement, {
            type: 'doughnut',
            data: {
                //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        //label: '# of Votes',
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
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
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2">\n  <div id="home-container11">\n    <button id="home-button43" ion-button color="positive" block icon-right style="text-align:right;" on-click="goToDeadlines()">\n      >Deadlines >\n      <ion-icon name="calendar"></ion-icon>\n    </button>\n  </div>\n  <div id="home-markdown16" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      All feedback up to date\n    </p>\n  </div>\n  <h4 id="home-heading11" style="color:#000000;">\n    Latest Feedback\n  </h4>\n<div>\n  <ion-slides>\n    <ion-slide>\n \n            <canvas #doughnutCanvas></canvas>\n    </ion-slide>\n    <ion-slide>\n                <canvas #doughnutCanvas2></canvas>\n        </ion-slide>\n  </ion-slides>\n</div>\n  <h5 id="home-heading12" style="color:#000000;">\n    Teams -- Students\n  </h5>\n  <div id="home-markdown17" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      very good, good, average, bad... and number of teams/students with that state (could work with table)\n    </p>\n  </div>\n  <button id="home-button44" ion-button color="assertive" style="font-size:9px;" on-click="goToRedGroups()">\n    Teams with red feedback\n  </button>\n  <button id="home-button45" ion-button color="assertive" style="font-size:9px;" on-click="goToRedStudents()">\n    students with red feedback\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
=======
        selector: 'page-home',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2">\n  <div id="home-container11">\n    <button id="home-button43" ion-button color="positive" block icon-right style="text-align:right;" on-click="goToDeadlines()">\n      >Deadlines >\n      <ion-icon name="calendar"></ion-icon>\n    </button>\n  </div>\n  <div id="home-markdown16" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      All feedback up to date\n    </p>\n  </div>\n  <h4 id="home-heading11" style="color:#000000;">\n    Latest Feedback\n  </h4>\n<div>\n  <ion-slides>\n    <ion-slide>\n \n            <canvas #doughnutCanvas></canvas>\n    </ion-slide>\n    <ion-slide>\n                <canvas #doughnutCanvas2></canvas>\n        </ion-slide>\n  </ion-slides>\n</div>\n  <h5 id="home-heading12" style="color:#000000;">\n    Teams -- Students\n  </h5>\n  <div id="home-markdown17" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      very good, good, average, bad... and number of teams/students with that state (could work with table)\n    </p>\n  </div>\n  <button id="home-button44" ion-button color="assertive" style="font-size:9px;" on-click="goToRedGroups()">\n    Teams with red feedback\n  </button>\n  <button id="home-button45" ion-button color="assertive" style="font-size:9px;" on-click="goToRedStudents()">\n    students with red feedback\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/home/home.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function DeadlinesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DeadlinesPage;
}());
DeadlinesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <h5 id="deadlines-heading13" style="color:#000000;font-weight:600;">\n    Weeks left until final deadline... ##\n  </h5>\n  <div class="spacer" style="width:300px;height:25px;" id="deadlines-spacer10"></div>\n  <ion-list id="deadlines-list9">\n    <ion-item color="none" id="deadlines-list-item59">\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item50">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item60">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item61">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
=======
        selector: 'page-deadlines',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deadlines\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <h5 id="deadlines-heading13" style="color:#000000;font-weight:600;">\n    Weeks left until final deadline... ##\n  </h5>\n  <div class="spacer" style="width:300px;height:25px;" id="deadlines-spacer10"></div>\n  <ion-list id="deadlines-list9">\n    <ion-item color="none" id="deadlines-list-item59">\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item50">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item60">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="deadlines-list-item61">\n      HCI deadline - 31/10/17\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/deadlines/deadlines.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], DeadlinesPage);

//# sourceMappingURL=deadlines.js.map

/***/ }),

/***/ 203:
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
        this.RedWeeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    };
    return RedGroupsPage;
}());
RedGroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <button ion-button color= "danger" *ngFor= "let BadG of RedGroups" (click)= "onClick()" class= "BadButton">\n          {{BadG}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<ion-list>\n  <ion-item *ngFor= "let BadWeek of RedWeeks">\n    <div class= "Week">\n      <h1>\n        {{BadWeek}}\n      </h1>\n    </div>\n    <button ion-button class= "stat">\n    </button>\n  </ion-item>\n</ion-list>\n\n<p>\n  {{name}}\n</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
=======
        selector: 'page-red-groups',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Groups\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <button ion-button color= "danger" *ngFor= "let BadG of RedGroups" (click)= "onClick()" class= "BadButton">\n          {{BadG}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<ion-list>\n  <ion-item *ngFor= "let BadWeek of RedWeeks">\n    <div class= "Week">\n      <h1>\n        {{BadWeek}}\n      </h1>\n    </div>\n    <button ion-button class= "stat">\n    </button>\n  </ion-item>\n</ion-list>\n\n<p>\n  {{name}}\n</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-groups/red-groups.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RedGroupsPage);

//# sourceMappingURL=red-groups.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedStudentsPage; });
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


var RedStudentsPage = (function () {
    function RedStudentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RedStudentsPage.prototype.ngOnInit = function () {
        this.RedStudents = ["Gary Johnson", "Abigail Taylor", "Tony Whatever", "Gideon Hacquah",];
    };
    RedStudentsPage.prototype.onClick = function () {
        this.RedWeeks = [{ Week: "Week 1", Contr: "30%" }, { Week: "Week 2", Contr: "29%" }, { Week: "Week 3", Contr: "33%" }];
    };
    return RedStudentsPage;
}());
RedStudentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <button ion-button color= "danger" *ngFor= "let BadStu of RedStudents" (click)="onClick()" class= "StudentButton">\n          {{BadStu}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<ion-list>\n  <ion-item *ngFor="let BadWeek of RedWeeks">\n    <div class= "Week">\n      <h1>\n        {{BadWeek.Week}}\n      </h1>\n    </div>\n    <button ion-button class= "stat">\n      \n    </button>\n    <h1 class= "contribution">\n      {{BadWeek.Contr}}\n    </h1>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
=======
        selector: 'page-red-students',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Red Students\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  \n  <ion-scroll scrollX="true">\n    <ion-row nowrap class= "scroller">\n      <button ion-button color= "danger" *ngFor= "let BadStu of RedStudents" (click)="onClick()" class= "StudentButton">\n          {{BadStu}}\n      </button>\n    </ion-row>\n  </ion-scroll>\n\n<ion-list>\n  <ion-item *ngFor="let BadWeek of RedWeeks">\n    <div class= "Week">\n      <h1>\n        {{BadWeek.Week}}\n      </h1>\n    </div>\n    <button ion-button class= "stat">\n      \n    </button>\n    <h1 class= "contribution">\n      {{BadWeek.Contr}}\n    </h1>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/red-students/red-students.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RedStudentsPage);

//# sourceMappingURL=red-students.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_summary_feedback_summary__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(106);
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
<<<<<<< HEAD
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page3">\n    <div id="groupList-container1">\n        <button id="groupList-button3" ion-button color="balanced" on-click="goToFeedbackSummary()">\n            Group&nbsp; <span>1</span>&nbsp; - &nbsp;<span>&nbsp; Project Stage</span>\n        </button>\n        <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button>\n    </div>\n    <div class="spacer" style="width:300px;height:15px;" id="groupList-spacer6"></div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
=======
        selector: 'page-group-list',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Group List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page3">\n    <div id="groupList-container1" *ngFor="let item of items; let i = index">\n        <button id="groupList-button3" ion-button color="balanced" on-click="goToFeedbackSummary()">\n            Group&nbsp; <span>{{item}}</span>&nbsp; - &nbsp;<span>{{items2[i]}}</span>&nbsp;\n        </button>\n        <button class="addbutton" ion-button clear on-click="goToGroup()">\n            <ion-icon name="add-circle"></ion-icon>\n        </button>\n    </div>\n    <div class="spacer" style="width:300px;height:15px;" id="groupList-spacer6"></div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/group-list/group-list.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], GroupListPage);

//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(106);
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
<<<<<<< HEAD
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n    <h4 id="feedbackSummary-heading6" style="color:#000000;">\n        Group <span>#</span>\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    <div id="top">\n        <div id="latestfeedback">\n            <p>Latest Feedback:\n            <br>Week <span>4</span></p>\n        </div>\n    </div>\n    <div>\n        <div id="lll">\n            <p class="floating" id="overallp" style="color:#000000;">\n            Current overall <br> performance:\n            </p>\n            <p class="floating" id="latestp" style="color:#000000;">\n                latest performance:\n                <br>\n            <span id="latestperformance">good</span>\n            </p>\n        </div>\n\n            <p id="performance2">\n                Very Good\n            </p>\n\n    </div>\n  <h5 id="feedbackSummary-heading9" style="color:#000000;">\n    Individual feedback forms\n  </h5>\n    \n  <div id="feedbackSummary-container9">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider color="primary" id="feedbackSummary-list-item-divider2">\n        W1\n      </ion-item-divider>\n      <ion-item color="none" id="feedbackSummary-list-item56">\n          <p class="name">Samantha Watson</p>\n        <span><button id="performance"></button></span><span>40%</span>\n        <ion-note item-right>\n            <button id="feedbackSummary-button40" ion-button clear color="positive" small>\n                Edit\n            </button><br>\n            <button id="feedbackSummary-button41" ion-button clear color="positive" small>\n                more details\n            </button>  \n        </ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item57">\n        <p class="name">John Taylor</p>\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item58">\n          <p class="name">James Kirk</p>\n        <ion-note item-right></ion-note>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
=======
        selector: 'page-feedback-summary',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Feedback Summary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page14">\n    <h4 id="feedbackSummary-heading6" style="color:#000000;">\n        Group <span>#</span>\n    </h4>\n    <div id="addfeedback">\n        <button id="feedbackSummary-button42" ion-button clear color="positive" small on-click="goToGroup();">\n            Add Feedback\n        </button>\n    </div>\n    <div id="top">\n        <div id="latestfeedback">\n            <p>Latest Feedback:\n            <br>Week <span>4</span></p>\n        </div>\n    </div>\n    <div>\n        <div id="lll">\n            <p class="floating" id="overallp" style="color:#000000;">\n            Current overall <br> performance:\n            </p>\n            <p class="floating" id="latestp" style="color:#000000;">\n                latest performance:\n                <br>\n            <span id="latestperformance">good</span>\n            </p>\n        </div>\n\n            <p id="performance2">\n                Very Good\n            </p>\n\n    </div>\n  <h5 id="feedbackSummary-heading9" style="color:#000000;">\n    Individual feedback forms\n  </h5>\n    \n  <div id="feedbackSummary-container9">\n    <ion-list id="feedbackSummary-list10">\n      <ion-item-divider color="primary" id="feedbackSummary-list-item-divider2">\n        W1\n      </ion-item-divider>\n      <ion-item color="none" id="feedbackSummary-list-item56">\n          <p class="name">Samantha Watson</p>\n        <span><button id="performance"></button></span><span>40%</span>\n        <ion-note item-right>\n            <button id="feedbackSummary-button40" ion-button clear color="positive" small>\n                Edit\n            </button><br>\n            <button id="feedbackSummary-button41" ion-button clear color="positive" small>\n                more details\n            </button>  \n        </ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item57">\n        <p class="name">John Taylor</p>\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item color="none" id="feedbackSummary-list-item58">\n          <p class="name">James Kirk</p>\n        <ion-note item-right></ion-note>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/feedback-summary/feedback-summary.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], FeedbackSummaryPage);

//# sourceMappingURL=feedback-summary.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffContactInfoPage; });
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
<<<<<<< HEAD
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <h4 id="staffContactInfo-heading2" style="color:#000000;">\n    Lecturer\n  </h4>\n   <div class= "Lecturerparent">\n  <ion-item-group id="staffContactInfo-list3">\n    <ion-item color="none" id="staffContactInfo-list-item15">\n      <ion-avatar class = "lecturer" item-start>\n        <img class= "Lecturersize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png">\n      </ion-avatar>\n      <ul>\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Office hours: xxx</li>\n        <li>Office location: xxx</li>\n      </ul>\n    </ion-item>\n  </ion-item-group>\n  </div>\n  <hr>\n\n  <h4 id="staffContactInfo-heading3" style="color:#000000;">\n    Teaching Assistance\n  </h4>\n  \n<div class= "TAParent">\n  	<ion-list no-lines>\n    <ion-item color="none" id="staffContactInfo-list-item28">\n      <ion-avatar class="TAav" item-left>\n        <img class= "TAsize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png"/>\n      </ion-avatar>\n      <ul class="TAlist">\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Lab hours: xxx</li>\n        <li>Lab location: xxx</li>\n      </ul>  \n\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
=======
        selector: 'page-staff-contact-info',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Staff Contact Info\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <h4 id="staffContactInfo-heading2" style="color:#000000;">\n    Lecturer\n  </h4>\n   <div class= "Lecturerparent">\n  <ion-item-group id="staffContactInfo-list3">\n    <ion-item color="none" id="staffContactInfo-list-item15">\n      <ion-avatar class = "lecturer" item-start>\n        <img class= "Lecturersize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png">\n      </ion-avatar>\n      <ul>\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Office hours: xxx</li>\n        <li>Office location: xxx</li>\n      </ul>\n    </ion-item>\n  </ion-item-group>\n  </div>\n  <hr>\n\n  <h4 id="staffContactInfo-heading3" style="color:#000000;">\n    Teaching Assistance\n  </h4>\n  \n<div class= "TAParent">\n  	<ion-list no-lines>\n    <ion-item color="none" id="staffContactInfo-list-item28">\n      <ion-avatar class="TAav" item-left>\n        <img class= "TAsize" src= "http://static.bleacherreport.net/images/redesign/avatars/default-user-icon-profile.png"/>\n      </ion-avatar>\n      <ul class="TAlist">\n        <li>Firstname Lastname</li>\n        <li>f.lastname@ucl.ac.uk</li>\n        <li>Lab hours: xxx</li>\n        <li>Lab location: xxx</li>\n      </ul>  \n\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/staff-contact-info/staff-contact-info.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], StaffContactInfoPage);

//# sourceMappingURL=staff-contact-info.js.map

/***/ }),

/***/ 328:
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
<<<<<<< HEAD
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <div id="blueblue">\n        <img id ="profilepic" src="assets/img/iPJmfKWCSdylgevYCJ6t_myAvatar3.png"/>\n        <form id="myProfile-form3">\n            <div class="spacer" style="height:40px;" id="myProfile-spacer2"></div>\n            <ion-item id="myProfile-input1">\n                <ion-input type="text" placeholder="Firstname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input2">\n                <ion-input type="text" placeholder="Lastname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input3">\n                <ion-input type="email" placeholder="Email"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input4">\n                <ion-input type="password" placeholder="Password"></ion-input>\n            </ion-item>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button id="myProfile-button25">G3</button>\n            <button id="myProfile-button24">G1</button>\n            <button id="myProfile-button26">G5</button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
=======
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <div id="blueblue">\n        <img id ="profilepic" src="assets/img/iPJmfKWCSdylgevYCJ6t_myAvatar3.png"/>\n        <form id="myProfile-form3">\n            <div class="spacer" style="height:40px;" id="myProfile-spacer2"></div>\n            <ion-item id="myProfile-input1">\n                <ion-input type="text" placeholder="Firstname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input2">\n                <ion-input type="text" placeholder="Lastname"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input3">\n                <ion-input type="email" placeholder="Email"></ion-input>\n            </ion-item>\n            <ion-item id="myProfile-input4">\n                <ion-input type="password" placeholder="Password"></ion-input>\n            </ion-item>\n        </form>\n    </div>\n    <div id="supervising">\n        <h5 id="myProfile-heading1" style="color:#000000;text-align:center;">\n        Supervising groups\n        </h5>\n        <div id="groups">\n            <button *ngFor="let item of items">\n                {{ item }}\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/my-profile/my-profile.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_group_list_group_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_profile_my_profile__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_staff_contact_info_staff_contact_info__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_red_students_red_students__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_red_groups_red_groups__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deadlines_deadlines__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_group_group__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_summary_feedback_summary__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(199);
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(200);
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
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/app/app.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-nz": 239,
	"./en-nz.js": 239,
	"./eo": 240,
	"./eo.js": 240,
	"./es": 241,
	"./es-do": 242,
	"./es-do.js": 242,
	"./es.js": 241,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it.js": 262,
	"./ja": 263,
	"./ja.js": 263,
	"./jv": 264,
	"./jv.js": 264,
	"./ka": 265,
	"./ka.js": 265,
	"./kk": 266,
	"./kk.js": 266,
	"./km": 267,
	"./km.js": 267,
	"./kn": 268,
	"./kn.js": 268,
	"./ko": 269,
	"./ko.js": 269,
	"./ky": 270,
	"./ky.js": 270,
	"./lb": 271,
	"./lb.js": 271,
	"./lo": 272,
	"./lo.js": 272,
	"./lt": 273,
	"./lt.js": 273,
	"./lv": 274,
	"./lv.js": 274,
	"./me": 275,
	"./me.js": 275,
	"./mi": 276,
	"./mi.js": 276,
	"./mk": 277,
	"./mk.js": 277,
	"./ml": 278,
	"./ml.js": 278,
	"./mr": 279,
	"./mr.js": 279,
	"./ms": 280,
	"./ms-my": 281,
	"./ms-my.js": 281,
	"./ms.js": 280,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
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
webpackContext.id = 428;

/***/ }),

/***/ 446:
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
<<<<<<< HEAD
        selector: 'page-login',template:/*ion-inline-start:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="login-form5">\n    <ion-list id="login-list7">\n      <ion-item id="login-input5">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input6">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <ion-item id="login-select1">\n      <ion-label>\n        Login as\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Student\n        </ion-option>\n        <ion-option>\n          TA\n        </ion-option>\n        <ion-option>\n          Lecturer\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="login-button1" ion-button color="stable" block>\n      Log in\n    </button>\n    <div class="spacer" style="height:40px;" id="login-spacer4"></div>\n  </form>\n  <img src="assets/img/5btfuKHPTWm5m0tLskbu_ScreenShot2017-11-06at14.09.26.png" style="display:block;width:50px;height:auto;margin-left:auto;" />\n</ion-content>'/*ion-inline-end:"/Users/antoine186/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
=======
        selector: 'page-login',template:/*ion-inline-start:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="login-form5">\n    <ion-list id="login-list7">\n      <ion-item id="login-input5">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input6">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <ion-item id="login-select1">\n      <ion-label>\n        Login as\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Student\n        </ion-option>\n        <ion-option>\n          TA\n        </ion-option>\n        <ion-option>\n          Lecturer\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="login-button1" ion-button color="stable" block>\n      Log in\n    </button>\n    <div class="spacer" style="height:40px;" id="login-spacer4"></div>\n  </form>\n  <img src="assets/img/5btfuKHPTWm5m0tLskbu_ScreenShot2017-11-06at14.09.26.png" style="display:block;width:50px;height:auto;margin-left:auto;" />\n</ion-content>'/*ion-inline-end:"/Users/wthong/Documents/GitHub/GC02_2017_Team2/IXNapp/src/pages/login/login.html"*/
>>>>>>> ca61e3618f028bd6ce15f65aee8e66538cf9282e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map