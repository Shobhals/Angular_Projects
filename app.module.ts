import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    RegistrationFormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
