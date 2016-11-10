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
var app_service_1 = require('./app.service');
var HumanComponent = (function () {
    function HumanComponent(humanService) {
        var _this = this;
        this.humanService = humanService;
        humanService.getHumans().subscribe(function (response) {
            _this.humans = response;
        });
    }
    HumanComponent.prototype.viewHuman = function (id) {
        var _this = this;
        console.log('in component  with ' + id);
        this.humanService.viewHuman(id).subscribe(function (data) {
            _this.specificHumanAge = data.age;
            _this.specificHumanName = data.name;
        });
    };
    HumanComponent.prototype.addHuman = function () {
        var _this = this;
        var human = {
            name: this.name,
            age: this.age
        };
        this.humanService.addHuman(human)
            .subscribe(function (data) {
            console.log('Success' + data);
            _this.humans.push(human);
        });
    };
    HumanComponent.prototype.removeHuman = function (id) {
        this.humanService.removeHuman(id)
            .subscribe(function (data) {
            console.log('Success deleting ' + data);
        });
    };
    HumanComponent = __decorate([
        core_1.Component({
            selector: 'human',
            moduleId: module.id,
            templateUrl: 'human.html',
            providers: [app_service_1.HumanService]
        }), 
        __metadata('design:paramtypes', [app_service_1.HumanService])
    ], HumanComponent);
    return HumanComponent;
}());
exports.HumanComponent = HumanComponent;
//# sourceMappingURL=human.component.js.map