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
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        console.log('Hello Login Provider');
    }
    LoginProvider.prototype.Login = function (login) {
        var body = JSON.stringify(login);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        // alert(JSON.stringify(ENV.endPoint))
        return this.http.post(ENV.endPoint + 'login', body, options)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    LoginProvider.prototype.loginWithFb = function (loginfb) {
        var body = JSON.stringify(loginfb);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        // alert(JSON.stringify(ENV.endPoint))
        return this.http.post(ENV.endPoint + 'sign_up', body, options)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            // alert(JSON.stringify(error))
            return error;
        });
    };
    LoginProvider.prototype.loginWithGoogle = function (logingoogle) {
        // alert(JSON.stringify (logingoogle));
        var body = JSON.stringify(logingoogle);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        // alert(JSON.stringify(ENV.endPoint))
        return this.http.post(ENV.endPoint + 'sign_up', body, options)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            // alert(JSON.stringify(error))
            return error;
        });
    };
    return LoginProvider;
}());
LoginProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], LoginProvider);
export { LoginProvider };
//# sourceMappingURL=login.js.map