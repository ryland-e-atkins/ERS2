import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    OnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
