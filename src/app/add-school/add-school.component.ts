import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  constructor() { }
  @Input() show ;
 @Output() schoolObj = new EventEmitter<any>() ;

  school = { name: null, street: null, subrub : null ,  postcode: null, state: null , studentRegisterd : null };

  ngOnInit() {
  }

  addSchool(school) {
    this.schoolObj.emit(school) ;
  }
}
