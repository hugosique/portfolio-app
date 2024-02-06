import { Component } from '@angular/core';
import { EDUCATION_LIST_CONSTANT } from 'src/app/core/constants/education-list.const';
import { IEducationItem } from 'src/app/core/interfaces/education-item';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationSelectList: IEducationItem[] = EDUCATION_LIST_CONSTANT;
}

