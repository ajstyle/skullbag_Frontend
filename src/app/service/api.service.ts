import { Injectable   } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {
   url = 'https://skullbag.herokuapp.com/api' ;
  // url = 'http://localhost:8000/api' ;
  planningData ;
  data = new BehaviorSubject(null) ;

  constructor(public http: HttpClient ) { }

  getData() {
    return this.data ;
  }

  setdata(val) {
    this.data.next(val) ;
  }


   getSchoolList() {
     return this.http.get(`${this.url}/school`);
   }

   addSchool(data) {
    return this.http.post(`${this.url}/school` , data );

   }

}


