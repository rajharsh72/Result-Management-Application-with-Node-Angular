import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  //errMsg:any;
  ngOnInit(): void {
  }

  teacherLogin(){
    localStorage.setItem("teacherLogin","true");
  }

  studentLogin(){
    localStorage.setItem("studentLogin","true");
  }

}
