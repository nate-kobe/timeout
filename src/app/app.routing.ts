import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/index';
import { EditComponent } from './edit/index';
import { ProfileComponent } from './profile/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { QRComponent } from './qrpage/index';
import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/:_id', component: ProfileComponent },
    { path: 'edit/:_id', component: EditComponent },
    { path: 'qrpage', component: QRComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);