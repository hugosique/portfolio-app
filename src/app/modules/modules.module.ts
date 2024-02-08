import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { AboutComponent } from './home/components/about/about.component';
import { EducationComponent } from './home/components/education/education.component';
import { ExperienceComponent } from './home/components/experience/experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ModulesModule { }
