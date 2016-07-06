/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
var mock_list_1 = require('./mock-list');
var ListService = (function () {
    function ListService() {
    }
    ListService.prototype.getTodo = function () {
        return Promise.resolve(mock_list_1.TODO);
    };
    // See the "Take it slow" appendix
    ListService.prototype.getTodoSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_list_1.TODO); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    ListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map