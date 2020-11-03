import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { EijeComponent } from './eije/eije.component';
import { ThreePicsComponent } from './three-pics/three-pics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {CrystalLightboxModule} from '@crystalui/angular-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    EijeComponent,
    ThreePicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    InfiniteScrollModule,
    NgbModule,
    CrystalLightboxModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
