import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import { IndexComponent } from './index/index.component';
import { SearchStudentResultComponent } from './search-student-result/search-student-result.component';


const routes: Routes = [
  {path:'addRecord', component:AddRecordComponent},
  {path:'teacher', component:DisplayRecordsComponent},
  {path:'',component:IndexComponent, pathMatch:'full'},
  {path:'index', component:IndexComponent},
  {path:'student', component:SearchStudentResultComponent},
  {path:'**', component:IndexComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
