import { User } from './../models/user';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    const url = `/authenticate`;
    return this.http.post(url, {un: username, pw: password} )
      .map(res => {
        if (res.status === 200) {
          localStorage.setItem('currentUser', JSON.stringify(res.json()));
          localStorage.setItem('isManager', 'false');
        } else {
        if (res.status === 222) {
            localStorage.setItem('currentUser', JSON.stringify(res.json()));
            localStorage.setItem('isManager', 'true');
        } else {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('isManager');
        }}
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isManager');
  }
}
