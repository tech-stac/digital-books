import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPagesComponent } from './components/search-pages/search-pages.component';
import { CreatePageComponent } from './components/create-page/create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPagesComponent,
    CreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
