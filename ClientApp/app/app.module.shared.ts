import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ExternalRequestService } from './components/shared/external-request.service';
import { UserListComponent } from './components/user-list/user-list.component';

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        UserListComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ ExternalRequestService ]
};
