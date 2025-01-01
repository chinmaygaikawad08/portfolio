import { Component, HostListener, OnInit } from '@angular/core';

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
  private observer: IntersectionObserver;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab) {
    this.selectedTab = tab;
    console.log(this.selectedTab)
  }


    // Scroll to a specific section
    scrollTo(sectionId: string): void {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      this.updateSelectedTab(sectionId);
    }
  
    // Update selected tab based on section ID
    updateSelectedTab(sectionId): void {
       this.selectedTab = sectionId;
    }
  
  


    ngAfterViewInit(): void {
      const sections = document.querySelectorAll('.section');
  
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              if(sectionId && sectionId?.trim()?.length){
                this.updateSelectedTab(sectionId);
              }
            }
          });
        },
        { threshold: 0.6 } // Trigger when 60% of the section is visible
      );
  
      sections.forEach((section) => this.observer.observe(section));
    }
  
    ngOnDestroy(): void {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  

}
