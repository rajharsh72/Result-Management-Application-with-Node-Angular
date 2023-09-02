import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-search-student-result',
  templateUrl: './search-student-result.component.html',
  styleUrls: ['./search-student-result.component.css']
})
export class SearchStudentResultComponent implements OnInit {

  constructor(private _router:Router,
    private _service:ApiServiceService){}


    readData:any;
    avail:any;
    err=false;
  ngOnInit(): void {
    if(localStorage.getItem("studentLogin")!="true"){
      this._router.navigate(['index']);
    }
  }

  searchForm =  new FormGroup({
    'roll_no':new FormControl('',Validators.required),
    'dob':new FormControl('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])
  });
  
  //search for student result
  searchResult(){
    if(this.searchForm.valid){
      let roll_no=this.searchForm.controls['roll_no'].value;
      let dob = this.searchForm.controls['dob'].value
      //console.log(roll_no, name);
      this._service.getSingleData(roll_no, dob).subscribe((res)=>{
        if(res.message == "no such data exists in database"){
          this.err=true;
        }
        else{
          this.avail = "true";
          console.log(res);
          this.readData = res.data;  
          this.err=false;      
        }
      });
    }
    this.readData=null;
    //this.avail="false";
  }

  logout()
  {
    localStorage.setItem("studentLogin","false");
    this._router.navigate(['index']);
  }
  
}
