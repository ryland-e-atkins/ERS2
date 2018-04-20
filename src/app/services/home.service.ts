import { User } from './../models/user';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ReimbForm } from '../models/reimb-form';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  getUserByID(id: number): Observable<User> {
    const url = `/users/${id}`;
    return this.http.get(url).map(res => {
      return new User(
        res.json().ERS_USERS_ID,
        res.json().ERS_USERNAME,
        res.json().ERS_PASSWORD,
        res.json().USER_FIRST_NAME,
        res.json().USER_LAST_NAME
      );
    });
  }

  getAll(): Observable<User[]> {
    const url = `/users`;
    return this.http.get(url).map(res => {
      console.log(res.json());
      return res.json().map(item => {
        return new User(
          item.ERS_USERS_ID,
          item.ERS_USERNAME,
          item.ERS_PASSWORD,
          item.USER_FIRST_NAME,
          item.USER_LAST_NAME
        );
      });
    });
  }

  getFormsByUserId(id: number): Observable<ReimbForm[]> {
    const url = `/forms/${id}`;
    return this.http.get(url).map(res => {
      return res.json().map(item => {
        return new ReimbForm(
          item.REIMB_ID,
          item.REIMB_AMOUNT,
          item.REIMB_SUBMITTED,
          item.REIMB_RESOLVED,
          item.REIMB_DESCRIPTION,
          item.REIMB_STATUS_ID,
          item.REIMB_TYPE_ID
        );
      });
    });
  }

  getAllForms(): Observable<ReimbForm[]> {
    const url = `/forms`;
    return this.http.get(url).map(res => {
      return res.json().map(item => {
        return new ReimbForm(
          item.REIMB_ID,
          item.REIMB_AMOUNT,
          item.REIMB_SUBMITTED,
          item.REIMB_RESOLVED,
          item.REIMB_DESCRIPTION,
          item.REIMB_STATUS_ID,
          item.REIMB_TYPE_ID
        );
      });
    });
  }
  approve(id: number): Observable<any> {
    const url = `/forms/approve/${id}`;
    return this.http.get(url);
  }
  deny(id: number): Observable<any> {
    const url = `/forms/deny/${id}`;
    return this.http.get(url);
  }
}
