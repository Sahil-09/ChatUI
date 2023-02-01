import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';



import { AppComponent } from './app.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ProfileviewComponent } from './profileview/profileview.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatscreenComponent,
    ChatlistComponent,
    ProfileviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
{provide: APP_BASE_HREF, useValue: '/project'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
