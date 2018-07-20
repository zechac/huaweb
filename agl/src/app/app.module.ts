import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { RouteOneComponent } from './route-one/route-one.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DefaultComponent } from './default/default.component';
import{RouteModuleModule} from './route-module/route-module.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    HomePageComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    RouteModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
