import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedTab: string = 'HOME';
  tabMap = [
    { "display": "Home", "key": "HOME" },
    { "display": "About", "key": "ABOUT" },
    { "display": "Experience", "key": "EXPERIENCE" },
    { "display": "Education", "key": "EDUCATION" },
    { "display": "Skills & Technologies", "key": "SKILLS_TECHNOLOGIES" },
    { "display": "Certifications", "key": "CERTIFICATIONS" },
    { "display": "Contact", "key": "CONTACT" }
  ]

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab) {
    this.selectedTab = tab;
    console.log(this.selectedTab)
  }

}
