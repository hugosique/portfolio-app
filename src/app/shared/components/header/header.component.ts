import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private scrollService: ScrollService,
  ) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
