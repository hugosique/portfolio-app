import { IProjectItem } from './../../core/interfaces/project-item';
import { PROJECT_LIST_CONSTANT } from './../../core/constants/project-list.const';
import { Component } from '@angular/core';
import { ABOUT_TAB_LIST_CONSTANT } from 'src/app/core/constants/about-tab-list.const';
import { IAboutTabList } from 'src/app/core/interfaces/about-tab-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  aboutTabSelectList: IAboutTabList[] = ABOUT_TAB_LIST_CONSTANT;
  selectedTab: string = 'about';

  projectSelectList: IProjectItem[] =PROJECT_LIST_CONSTANT;

  onTabChange(selectedTab: any): void {
    this.selectedTab = selectedTab;
  }
}
