import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  constructor(private _service:ApiServiceService , private _router:Router, private _dialogRef:DialogRef<AddRecordComponent>){}

  ngOnInit(): void {
      
  }

  addForm = new FormGroup({
    'roll_no':new FormControl('',Validators.required),
    'name':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    'date_of_birth':new FormControl('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    'score':new FormControl('',Validators.required),

  });
  errorMsg:any;
  addStudent(){
    if(this.addForm.valid){
      this._service.addRecord(this.addForm.value).subscribe((res)=>{
        if(res.message == "data inserted"){
          window.location.reload();
          this._dialogRef.close();
        }
        else{
          this.errorMsg="true";
        }
        
      });
    }
  }
  back(){
    window.location.reload();
    this.addForm.reset();
  }
}
