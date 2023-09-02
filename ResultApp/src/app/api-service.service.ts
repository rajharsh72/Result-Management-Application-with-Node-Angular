import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }

  //connecting to API
  apiUrl = 'https://nodeapi-backend.azurewebsites.net/students';

  //get all data
  getAllData():Observable<any>{
    return this._http.get(this.apiUrl);
  }

  //add a new record
  addRecord(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`, data);
  }

  //get a single data
  getSingleData(id:any, dob:any):Observable<any>{
    let roll_no=id;
    let studentDob=dob;
    //console.log(roll_no, studentName);
    let params={roll_no,studentDob}
    return this._http.get(`${this.apiUrl}/${roll_no}/${studentDob}`);
  }

  //delete a record
  deleteRecord(id:any):Observable<any>{
    let roll = id;
    return this._http.delete(`${this.apiUrl}/${roll}`);
  }

  //update records
  updateRecord(data:any, id:any):Observable<any>{
    let roll_no=id;
    return this._http.put(`${this.apiUrl}/${roll_no}`, data);
  }
}
