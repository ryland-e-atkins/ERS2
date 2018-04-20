import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { HomeService } from '../../services/home.service';
import { ReimbForm } from '../../models/reimb-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[];
  forms: ReimbForm[];
  isManager: boolean;

  constructor(private homeService: HomeService) {
    const obj = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new User(
      obj.ERS_USERS_ID,
      obj.ERS_USERNAME,
      obj.ERS_PASSWORD,
      obj.USER_FIRST_NAME,
      obj.USER_LAST_NAME
    );
  }

  ngOnInit() {
    if (localStorage.getItem('isManager') === 'false') {
      this.isManager = false;
      this.getFormsByUserId();
    } else {
      this.isManager = true;
      this.getAllForms();
    }
  }

  isPending(status: number): boolean {
    if (status === 1) {
      return true;
    } else {
      return false;
    }
  }

  private getAllUsers() {
    this.homeService.getAll().subscribe((users) => {
      this.users = users;
  });
  }

  private getUserByID() {
    this.homeService.getUserByID(this.currentUser.id).subscribe((user) => {
      this.currentUser = user;
    });
  }

  private getFormsByUserId() {
    this.homeService.getFormsByUserId(this.currentUser.id).subscribe((forms) => {
      this.forms = forms;
    });
  }

  private getAllForms() {
    this.homeService.getAllForms().subscribe((forms) => {
      this.forms = forms;
    });
  }

  private approve(id: number) {
    this.homeService.approve(id).subscribe();
  }
  private deny(id: number) {
    this.homeService.deny(id).subscribe();
  }
}
