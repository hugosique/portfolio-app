import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<string>('');

  get scroll$() {
    return this.scrollSubject.asObservable();
  }

  scrollTo(sectionId: string) {
    this.scrollSubject.next(sectionId);
  }
}
