import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WoobChat';
  isopen = false;
  issideopen = false;
  open(){
    this.isopen=!this.isopen
  }

  sideopen(event){
    console.log("emitted app")
    this.issideopen=!this.issideopen
  }
}
