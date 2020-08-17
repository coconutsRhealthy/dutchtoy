import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
