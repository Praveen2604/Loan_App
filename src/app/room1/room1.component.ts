import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.css'],
  // inputs:['countervalue']
})
export class Room1Component implements OnChanges  {
  @Input() valuefromparent=0;
  // countervalue=0;
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    for (let property in changes) {
      if (property === 'valuefromparent') {
        if(changes[property].currentValue == 5){
          alert("limit exeet room1");
        }
      }
    }
  }

  // function(){
  //   if(this.countervalue==10) alert("limit exeet");
  // }
}
