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
var list_service_1 = require('./list.service');
var AppComponent = (function () {
    function AppComponent(listService) {
        this.listService = listService;
        this.title = 'List';
    }
    AppComponent.prototype.getTodo = function () {
        var _this = this;
        this.listService.getTodo().then(function (li) { return _this.li = li; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTodo();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My ToDo List</h2>\n    <ul class=\"li\">\n      <li *ngFor=\"let list of li\"  [class.selected]=\"list === selectedHero\">\n       {{list.id}} {{list.name}}\n      </li>\n    </ul>  ",
            providers: [list_service_1.ListService]
        }), 
        __metadata('design:paramtypes', [list_service_1.ListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map