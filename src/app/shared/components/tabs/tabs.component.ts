import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: any[] = [];
  @Input() selectedTab!: string;
  @Output() tabChange = new EventEmitter<String>();

  public selectTab(tab: string): void {
    if(this.selectedTab !== tab) {
      this.selectedTab = tab;
      this.tabChange.emit(tab);
    }
  }
}
