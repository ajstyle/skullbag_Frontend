import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './service/api.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {SearchPipe} from './pipe/search.pipe' ;
import {StatePipe} from './pipe/state.pipe' ;

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    StatePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
