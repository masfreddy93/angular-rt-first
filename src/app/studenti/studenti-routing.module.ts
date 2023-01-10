import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiAboutComponent } from './pages/studenti-about/studenti-about.page';
import { StudentiHomeComponent } from './pages/studenti-home/studenti-home.page';

const routes: Routes = [
  {
    path: 'home',
    component: StudentiHomeComponent
  },
  {
    path: 'about',
    component: StudentiAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentiRoutingModule { }
