import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('proficiencyAnimation', [
      state('0', style({ width: '0%' })),
      state('100', style({ width: '{{ proficiency }}%' }), { params: { proficiency: 0 } }),
      transition('0 => 100', [
        animate('1s ease-out')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  education: any = []

  PROGRAMMING_LANGUAGES = {
    'display': "Programming Languages",
    value: [
      {
        title: "TypeScript",
        logo: "../../assets/Images/angular-svgrepo-com.svg",
        proficiency: 80
      },
      {
        title: "Python",
        logo: "../../assets/Images/python-svgrepo-com.svg",
        proficiency: 70
      },
      {
        title: "HTML",
        logo: "../../assets/Images/html-5-svgrepo-com.svg",
        proficiency: 85
      },
      {
        title: "CSS",
        logo: "../../assets/Images/css3-svgrepo-com.svg",
        proficiency: 80
      }
    ]
  }

  constructor(public constantService: ConstantService,) { }


  ngOnInit(): void {
    this.education = this.constantService.getEducation();
    console.log(this.education)
  }

}
