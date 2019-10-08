import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes : Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'about',    component: AboutComponent },
    { path: 'contact',    component: ContactComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingModule = RouterModule .forRoot( routes );