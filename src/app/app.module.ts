import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { EijeComponent } from './eije/eije.component';
import { ThreePicsComponent } from './three-pics/three-pics.component';

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
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
