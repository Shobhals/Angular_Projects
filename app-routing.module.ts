import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {
    path: 'registration-form',
    component: RegistrationFormComponent
  },

  {
    path: 'datepicker',
    component: DatepickerComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
