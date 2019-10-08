import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from  './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { DirectivaNgIfComponent } from  './components/directiva-ngif.component';
import { DirectivaNgForComponent } from './components/directiva-ngfor.component';
import { DirectivaNgSwitchComponent } from './components/directiva-ngswitch.component';

import { DataService } from './services/data/data.service';
import { appRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent,
    DirectivaNgSwitchComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    appRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
