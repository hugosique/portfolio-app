import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private scrollService: ScrollService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.scrollService.scroll$.subscribe(sectionId => {
      const element = this.el.nativeElement.querySelector(`#${sectionId}`);
      if (element) {
        this.renderer.setProperty(document.documentElement, 'scrollTop', element.offsetTop);
      }
    });
  }

}
