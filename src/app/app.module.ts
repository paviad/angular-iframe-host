import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppPlainComponent } from './app-plain.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [
    AppPlainComponent,
    HomeComponent,
    AppComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppPlainComponent]
})
export class AppModule { }
