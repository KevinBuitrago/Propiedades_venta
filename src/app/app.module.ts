import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditHomeComponent } from './components/edit-home/edit-home.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeDetailsComponent,
    EditHomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
