import { Component } from '@angular/core';
import { EXPERIENCE_LIST_CONSTANT } from 'src/app/core/constants/experience-list.const';
import { IExperienceItem } from 'src/app/core/interfaces/experience-item';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceSelectList: IExperienceItem[] = EXPERIENCE_LIST_CONSTANT;
}
