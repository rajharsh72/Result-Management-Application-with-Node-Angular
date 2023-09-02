import { Component, OnInit, Inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddRecordComponent } from '../add-record/add-record.component';
import { EditRecordComponent } from '../edit-record/edit-record.component';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.css']
})

export class DisplayRecordsComponent implements OnInit{

  constructor(private service:ApiServiceService , 
    private router:Router, 
    private _dialog:MatDialog,
    @Inject(DOCUMENT) private document:Document
    ){}

  readData:any;
  successMsg=false;
  errorMsg=false;
  ngOnInit():void{
    this.service.getAllData().subscribe((res)=>{
      if(localStorage.getItem("teacherLogin")!="true"){
        this.router.navigate(['index']);
      }
      console.log(res,"res==>");
      this.readData=res.data;
    });

  }

  openAddRecord(){
    this._dialog.open(AddRecordComponent);
  }

  deleteRecord(roll:any){
    this.service.deleteRecord(roll).subscribe((res)=>{
      if(res.message =="deleted successfully"){
        window.location.reload();
      }
      else{
        this.errorMsg=true;
      }
      
    });
  }

  editRecord(data:any){
    this._dialog.open(EditRecordComponent,{
      data,
    });
  }


  logout()
  {
    localStorage.setItem("teacherLogin","false");
    this.router.navigate(['index']);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
