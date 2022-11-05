import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="praveen";
  count=1;
  constructor() { }

  ngOnInit(): void {
  }

  increasecount(){
    this.count++;
    //this.showusers=true;
  }
  showusers=true;
  selecteduser="";
  users=[{name:"praveen",role:"developer",experiance:"2 years"},
  {name:"shan",role:"developer",experiance:"2 years"},
  {name:"prasath",role:"Front-end developer",experiance:"0.4 years"},
  {name:"jecy",role:"design engineer",experiance:"3-4 years"}]
}
