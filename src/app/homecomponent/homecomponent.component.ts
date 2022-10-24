import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  a='HELLO'
  b='SRI CHANDRA KUMAR'
  c='FREE'
  d=123;
  name1='NANI';
  name2='chandu'; 
  money=5000;
  todaydate = new Date();
  performance =2;
users:User[]=[];
  
  document:any
status=true;
  mobiles=['redmi','iphone','nokia'];


  constructor(@Inject(DOCUMENT) document:Document, private testserv : TestService){
    this.document = document;
  }
name =undefined;
  ngOnInit(): void {
    ('Hello this is my world');
  }
 
printdata(event:any){
  alert(this.name);
  alert(this.document.getElementById('doctest').value);
}
getalluser(){
  this.testserv.getAllUsers().subscribe(X=>{
        this.users=X;
  });
}
}

