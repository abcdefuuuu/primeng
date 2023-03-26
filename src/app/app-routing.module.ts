import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ImformationComponent } from './imformation/imformation.component';
import { SurveyComponent } from './survey/survey.component';
const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'imformation', component: ImformationComponent },
  { path: 'survey', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
