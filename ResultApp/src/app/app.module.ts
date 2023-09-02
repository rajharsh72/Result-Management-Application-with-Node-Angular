import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddRecordComponent } from './add-record/add-record.component';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { IndexComponent } from './index/index.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { SearchStudentResultComponent } from './search-student-result/search-student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    DisplayRecordsComponent,
    IndexComponent,
    EditRecordComponent,
    SearchStudentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
