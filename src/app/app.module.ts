import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyImgComponent } from './my-img/my-img.component';
import { MyImg2Component } from './my-img-2/my-img-2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyImgComponent,
    MyImg2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
