import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from  './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

import { DirectivaNgIfComponent } from  './components/directiva-ngif.component';
import { DirectivaNgForComponent } from './components/directiva-ngfor.component';
import { DirectivaNgSwitchComponent } from './components/directiva-ngswitch.component';

import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent,
    DirectivaNgSwitchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
