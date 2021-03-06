import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import { AdminUserComponent }  from './admin/user/admin-user.component';
import { AdminScoutAddComponent, AdminScoutListComponent }  from './admin/scout/index';
import { routing }        from './app.routing';
 
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, ScoutService } from './_services/index';
import { HomeComponent } from './home/index';
import { EditComponent } from './edit/index';
import { LayoutComponent } from './layout/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { QRComponent } from './qrpage/index';
import { CheckinComponent } from './checkin/index';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        ProfileComponent,
        AdminUserComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EditComponent,
        QRComponent,
        LayoutComponent,
        AdminScoutListComponent,
        AdminScoutAddComponent,
        CheckinComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ScoutService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
    ],
    bootstrap: [LayoutComponent]
})
 
export class AppModule { }
/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
