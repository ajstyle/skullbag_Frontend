import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './service/api.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {SearchPipe} from './pipe/search.pipe' ;
import {StatePipe} from './pipe/state.pipe';
import { AddSchoolComponent } from './add-school/add-school.component' ;

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    StatePipe,
    AddSchoolComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
