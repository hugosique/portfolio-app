import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  aboutTabsSelectList = [
    {
      title: 'Info',
      value: 'about'
    },
    {
      title: 'Educação',
      value: 'education'
    },
    {
      title: 'Experiência',
      value: 'experience'
    },
  ];
  selectedTab: any = 'about';

  onTabChange(selectedTab: any): void {
    this.selectedTab = selectedTab;
  }
}
