import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {

  @Output() closeemit:EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    console.log("emitted pr")
    this.closeemit.emit(null)
  }

}
