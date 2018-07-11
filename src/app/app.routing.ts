import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/index';
import { EditComponent } from './edit/index';
import { ProfileComponent } from './profile/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AdminUserComponent } from './admin/user/index';
import { QRComponent } from './qrpage/index';
import { LayoutComponent } from './layout/index';
import { AdminScoutListComponent } from './admin/scout/index';
import { AdminScoutAddComponent } from './admin/scout/index';
import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/:_id', component: ProfileComponent, canActivate: [AuthGuard]  },
    { path: 'edit/:_id', component: EditComponent, canActivate: [AuthGuard]  },
    { path: 'qrpage', component: QRComponent },
    { path: 'admin/user', component: AdminUserComponent, canActivate: [AuthGuard]  },
    { path: 'admin/scout', component: AdminScoutListComponent, canActivate: [AuthGuard]  },
    { path: 'admin/scout/add', component: AdminScoutAddComponent, canActivate: [AuthGuard]  },
    { path: 'layout', component: LayoutComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);