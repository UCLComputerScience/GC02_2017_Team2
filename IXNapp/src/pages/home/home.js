var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeadlinesPage } from '../deadlines/deadlines';
import { RedGroupsPage } from '../red-groups/red-groups';
import { RedStudentsPage } from '../red-students/red-students';
import { Chart } from 'chart.js';
import { Slides } from 'ionic-angular';
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
        new Chart(donutCtx, {
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
        new Chart(donutCtx2, {
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
    HomePage.prototype.goToDeadlines = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(DeadlinesPage);
    };
    HomePage.prototype.goToRedGroups = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(RedGroupsPage);
    };
    HomePage.prototype.goToRedStudents = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(RedStudentsPage);
    };
    return HomePage;
}());
__decorate([
    ViewChild('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    ViewChild('doughnutCanvas2'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas2", void 0);
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map