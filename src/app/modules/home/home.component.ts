import { IProjectItem } from './../../core/interfaces/project-item';
import { PROJECT_LIST_CONSTANT } from './../../core/constants/project-list.const';
import { Component, OnInit } from '@angular/core';
import { ABOUT_TAB_LIST_CONSTANT } from 'src/app/core/constants/about-tab-list.const';
import { IAboutTabList } from 'src/app/core/interfaces/about-tab-list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  aboutTabSelectList: IAboutTabList[] = ABOUT_TAB_LIST_CONSTANT;
  selectedTab: string = 'about';
  projectSelectList: IProjectItem[] =PROJECT_LIST_CONSTANT;

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  public createContactForm(): void {
    this.contactForm = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, Validators.email],
      phone: [null],
      subject: [null],
      message: [null],
    });
  }

  public onTabChange(selectedTab: any): void {
    this.selectedTab = selectedTab;
  }

  public sendContactMessage(): void {
    
  }
}
