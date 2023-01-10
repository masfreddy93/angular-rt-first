import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentiRoutingModule } from './studenti-routing.module';
import { StudentiHomeComponent } from './pages/studenti-home/studenti-home.page';
import { StudentiAboutComponent } from './pages/studenti-about/studenti-about.page';


@NgModule({
  declarations: [
    StudentiHomeComponent,
    StudentiAboutComponent
  ],
  imports: [
    CommonModule,
    StudentiRoutingModule
  ]
})
export class StudentiModule { }
