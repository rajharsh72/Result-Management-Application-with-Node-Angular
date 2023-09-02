import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  editForm: FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _service:ApiServiceService,
    @Inject(MAT_DIALOG_DATA) private _data:any,
    private _dialogRef:DialogRef<EditRecordComponent>
  ){
    this.editForm=this._fb.group({
      roll_no:['',Validators.required],
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      date_of_birth:['',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      score:['',Validators.required]
    })
  }

  roll_no:any
  ngOnInit(): void {
    this.editForm.patchValue(this._data);
    this.roll_no=this._data.roll_no;
    console.log(this.roll_no);
  }
  
  successMsg:any;
  errorMsg:any;
  updateRecord(){
    if(this.editForm.valid){
      this._service.updateRecord(this.editForm.value,this.roll_no).subscribe((res)=>{
        
        if(res.message == 'data updated successfully'){
          window.location.reload();
          this._dialogRef.close();
        }
        else{
          this.errorMsg="Update Unsuccessfull, Try again!";
        }
      });
    }
    else{
      console.error('error occured');
      
    }
  }


}
