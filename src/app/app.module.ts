import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Test01Component } from './components/test01/test01.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'test01', component: Test01Component },
    ]),
  ],
  declarations: [
    AppComponent,
    Test01Component,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
