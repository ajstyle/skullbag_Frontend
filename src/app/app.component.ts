import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {ApiService} from './service/api.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  schoolList$: Observable<any> ;
  show = false;
  school = { name: null, street: null, subrub : null ,  postcode: null, state: null , studentRegisterd : null };
  schoolName = '' ;
  state = '' ;
  showLoader = true ;
  showMessage = false ;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

    this.schoolList$ = this.apiService.getSchoolList().pipe(tap(_ => this.showLoader = false ));
  }

  addSchool(shop) {
    console.log(shop);
    this.apiService.addSchool(shop).subscribe(res => {
      console.log(res) ;
      if (res) {
        this.showMessage = true ;
        setTimeout(() => {
          this.showMessage = false ;
        }, 3000);
      }

    }, error => {
      console.log(error) ;
    });
  }

  toggleShop() {
    this.show = !this.show;

  }


  filter(name) {
console.log(name);

  }
}
