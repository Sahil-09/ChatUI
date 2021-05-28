import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ map } from 'rxjs/operators'

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.component.html',
  styleUrls: ['./chatscreen.component.css']
})
export class ChatscreenComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data:{from:string,message:string}[]=[]
  isloading:boolean = true;
  ngOnInit(){
    this.http.get<{from:string,message:string}[]>("http://localhost:3000/").pipe( map(data=>{
    let mod=[]
    for(let a of data){
      // console.log(a)
      mod.push(a)
    }
    return mod
  }) ).subscribe(chat=>{
      if(chat){
        this.isloading=false;
        this.data.push(...chat)
        console.log(this.data[6].message+" :)")
      }
    })
  }

}
