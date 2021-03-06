"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var org_service_1 = require('./org.service');
var OrgListComponent = (function () {
    function OrgListComponent(router, orgService) {
        this.router = router;
        this.orgService = orgService;
        this.orgList = [];
    }
    OrgListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orgService.getOrgList()
            .then(function (orgList) { return _this.orgList = orgList; }, function (error) { return _this.errorMsg = error; });
    };
    OrgListComponent = __decorate([
        core_1.Component({
            selector: 'org-list',
            templateUrl: '../templates/organization/orgList.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, org_service_1.OrgService])
    ], OrgListComponent);
    return OrgListComponent;
}());
exports.OrgListComponent = OrgListComponent;
