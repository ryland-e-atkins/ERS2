import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './guards/auth.guard';
import { ManagerService } from './services/manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { routing } from './modules/routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from './services/home.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { NewFormService } from './services/new-form.service';
import { OliverComponent } from './oliver/oliver.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManagerComponent,
    RegisterComponent,
    AlertComponent,
    NewFormComponent,
    OliverComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    HomeService,
    LoginService,
    ManagerService,
    AuthGuard,
    AlertService,
    UserService,
    HttpClient,
    NewFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
