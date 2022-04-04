import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
