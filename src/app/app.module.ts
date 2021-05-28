import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
