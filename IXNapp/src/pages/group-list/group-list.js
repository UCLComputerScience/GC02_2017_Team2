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
import { FeedbackSummaryPage } from '../feedback-summary/feedback-summary';
import { GroupPage } from '../group/group';
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
        this.navCtrl.push(FeedbackSummaryPage);
    };
    GroupListPage.prototype.goToGroup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(GroupPage);
    };
    return GroupListPage;
}());
GroupListPage = __decorate([
    Component({
        selector: 'page-group-list',
        templateUrl: 'group-list.html'
    }),
    __metadata("design:paramtypes", [NavController])
], GroupListPage);
export { GroupListPage };
//# sourceMappingURL=group-list.js.map