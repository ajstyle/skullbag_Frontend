import { Component, OnInit } from '@angular/core';
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
  schoolName = '' ;
  state = '' ;
  showLoader = true ;
  showMessage = false ;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getData() ;
  }

  getData() {
    this.schoolList$ = this.apiService.getSchoolList().pipe(tap(_ => this.showLoader = false ));

  }

  addSchool(schoolObj) {
    this.showLoader = true ;
    this.apiService.addSchool(schoolObj).subscribe(res => {
      console.log(res) ;
      if (res) {
        this.show = false ;
        this.showMessage = true ;
        this.showLoader = false ;

        this.getData();
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
