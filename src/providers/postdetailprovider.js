var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ENV } from '../app/env';
import 'rxjs/add/operator/map';
/*
  Generated class for the Postdetailprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Postdetailprovider = (function () {
    function Postdetailprovider(http) {
        this.http = http;
        console.log('Hello Postdetailprovider Provider');
    }
    Postdetailprovider.prototype.postdetails = function (postdetail) {
        var body = JSON.stringify(postdetail);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        return this.http.post(ENV.endPoint + 'post_ad', body, options)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    return Postdetailprovider;
}());
Postdetailprovider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Postdetailprovider);
export { Postdetailprovider };
//# sourceMappingURL=postdetailprovider.js.map