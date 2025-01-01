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
        title:"TypeScript",
        logo:"../../assets/Images/typescript-official-svgrepo-com.svg",
        proficiency:80
      },
      {
        title: "Python",
        logo: "../../assets/Images/python-svgrepo-com.svg",
        proficiency: 70
      },
      {
        title: "HTML",
        logo: "../../assets/Images/html-svgrepo-com.svg",
        proficiency: 85
      },
      {
        title: "CSS",
        logo: "../../assets/Images/css-3-svgrepo-com.svg",
        proficiency: 80
      }
    ]
  }


  SKILLS_INFO= {
    OPERATING_SYSTEMS:{
      'display':"Operating Systems",
      value:[
        {
          title:"Ubuntu",
          logo:"../../assets/Images/ubuntu-svgrepo-com (2).svg",
        },
        {
          title:"Windows",
          logo:"../../assets/Images/windows-azure-svgrepo-com.svg",
        }
      ]
    },
    PROGRAMMING_LANGUAGES:{
      'display':"Programming Languages",
      value:[
        {
          title:"TypeScript",
          logo:"../../assets/Images/typescript-official-svgrepo-com.svg",
          proficiency:80
        },
        {
          title: "Python",
          logo: "../../assets/Images/python-svgrepo-com.svg",
          proficiency: 70
        },
        {
          title: "HTML",
          logo: "../../assets/Images/html-svgrepo-com.svg",
          proficiency: 85
        },
        {
          title: "CSS",
          logo: "../../assets/Images/css-3-svgrepo-com.svg",
          proficiency: 80
        }
      ]
    },
    VERSION_CONTROL:{
      'display':"Version Control",
      value:[
        {
          title:"Git",
          logo:"../../assets/Images/git-svgrepo-com (1).svg",
        },
        {
          title:"GitHub",
          logo:"../../assets/Images/github-svgrepo-com.svg",
        },
        {
          title:"GitLab",
          logo:"../../assets/Images/gitlab-svgrepo-com.svg",
        }
      ]
    },
    FRAMEWORK:{
      'display':"Framework",
      value:[
        {
          title:"Angular",
          logo:"../../assets/Images/angular-svgrepo-com.svg",
        },
      ]
    },
    TOOLS:{
      'display':"Tools",
      value:[
        {
          title:"VS Code",
          logo:"../../assets/Images/vscode-svgrepo-com.svg",
        },
        {
          title:"Chat GPT",
          logo:"../../assets/Images/chatgpt-6.svg",
        },
        {
          title:"Gemini",
          logo:"../../assets/Images/google-gemini-logomark-24438.svg",
        },
      ]
    },
  }

  constructor(public constantService: ConstantService,) { }


  ngOnInit(): void {
    this.education = this.constantService.getEducation();
    console.log(this.education)
  }

  getKeys(obj: object): string[] {
    return Object.keys(obj);
  }
}
