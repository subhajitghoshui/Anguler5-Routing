import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { layoutModule } from './layouts/layout.module';
import { pageModule } from './pages/page.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    layoutModule,
    pageModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
