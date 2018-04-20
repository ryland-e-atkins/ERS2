import { ManagerComponent } from './../../components/manager/manager.component';
import { NewFormComponent } from './../../components/new-form/new-form.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AuthGuard } from '../../guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'newForm', component: NewFormComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
