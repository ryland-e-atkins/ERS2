import { ReimbForm } from './../models/reimb-form';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NewReimbForm } from '../models/new-reimb-form';

@Injectable()
export class NewFormService {

  constructor(private http: Http) { }

  create(reimbForm: NewReimbForm) {
    return this.http.post('/forms/new', reimbForm);
  }
}
