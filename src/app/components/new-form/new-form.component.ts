import { ReimbForm } from './../../models/reimb-form';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { NewFormService } from '../../services/new-form.service';
import { NewReimbForm } from '../../models/new-reimb-form';

@Component({
    moduleId: module.id,
    templateUrl: 'new-form.component.html'
})

export class NewFormComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private newFormService: NewFormService,
        private alertService: AlertService) { }

    submitForm() {
        this.loading = true;
        console.log('creating new form');
        console.log(localStorage.getItem('currentUser'));
        console.log(JSON.stringify(localStorage.getItem('currentUser')));
        console.log(JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))));
        console.log(JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))).ERS_USERS_ID);
        const newForm = new NewReimbForm(
            JSON.parse(localStorage.getItem('currentUser')).ERS_USERS_ID,
            this.model.amount,
            this.model.description,
            this.model.type
        );
        this.newFormService.create(newForm)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Form Submission successful', true);
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
