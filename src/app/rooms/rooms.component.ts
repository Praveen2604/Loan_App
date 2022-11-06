import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  {

count=0;
increasecount(){
  this.count++;
  if(this.count==10) alert("limit exeet");
  }

decreasecount(){
this.count--;
}



}
