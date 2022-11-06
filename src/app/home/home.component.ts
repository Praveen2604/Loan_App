import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="praveen";
  count=1;
  showelements=true;
  constructor() { }

  ngOnInit(): void {
  }

  increasecount(){
    this.count++;
    //this.showusers=true;
  }
  showusers=true;
  selecteduser="";
  users=[{id:'1',name:"praveen",role:"developer",experiance:"2 years"},
  {id:'2',name:"shan",role:"developer",experiance:"2 years"},
  {id:'3',name:"prasath",role:"Front-end developer",experiance:"0.4 years"},
  {id:'4',name:"jecy",role:"design engineer",experiance:"3-4 years"}];


  getusers(){
    this.users=[{id:'1',name:"praveen",role:"developer",experiance:"2 years"},
    {id:'2',name:"shan",role:"developer",experiance:"2 years"},
    {id:'3',name:"prasath",role:"Front-end developer",experiance:"0.4 years"},
    {id:'4',name:"jecy",role:"design engineer",experiance:"3-4 years"},
    {id:'5',name:"gobi",role:"engineer",experiance:"4 years"}];
  }

  userid(index: any,users: { id: any; }){
    return users.id
  }

  //Angular pipes
  today=new Date();
  myname="Praveen";
  mobilenumber=123456.7897679;
  currency=450.50;
  //custom angular pipes
  animals=['Lion','Tiger','Elephant','Monkey','Cheetah','Hourse','Buffello'];
  animalname="";
}
