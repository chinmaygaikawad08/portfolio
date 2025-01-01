import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConstantService {
  constructor() {}

  public static constant ={

    EDUCATION_INFO: [
      {
        "title":"Bachelor’s Degree",
        "label":"Bachelor of Computer Engineering",
        "year":"2022",
        "university":"University of Mumbai",
        "institute":"Padmabhushan VasantDada Patil Pratishthan’s College of Engineering, Sion, Mumbai",
        "grade_unit":"CGPA",
        "grades":"8.75"
      },
      {
        "title":"HSC",
        "label":"Higher Secondary School",
        "year":"2018",
        "university":"University of Mumbai",
        "institute":"Kankavli College,Kankavli, Sindhudurg",
        "grade_unit":"Percent",
        "grades":"76.00 %"
      },
      {
        "title":"SSC",
        "label":"Secondary School",
        "year":"2016",
        "university":"University of Mumbai",
        "institute":"Kasarde Madhyamik Vidyalaya Kasarde, Kankavli, Sindhudurg",
        "grade_unit":"Percent",
        "grades":"93.60 %"
      }
    ],
  
    EXPERIENCE_INFO: [
      {
        "role":"FRONT-END ANGULAR DEVELOPER",
        "organisation":"Athmin Technologies",
        "from":"November 2022",
        "to":"Present",
        "points":[
          "Played a pivotal role in the development of PRONNEL, a comprehensive CRM, Project, and Task Management Platform.",
          "Spearheaded the implementation of advanced functionalities",
          "Automation Tree Structure for seamless project visualization and management.",
          "Advanced Filters to enhance users interactivity and streamline data retrieval processes.",
          "Collaborated with cross-functional teams to deliver high-quality, scalable web applications aligned with business goals."
        ]
  
      }
    ],

    SKILLS_INFO: {
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


  }


  getExperience(){
    return  JSON.parse(JSON.stringify(ConstantService.constant['EXPERIENCE_INFO']));
  } 

  getEducation(){
    return  JSON.parse(JSON.stringify(ConstantService.constant['EDUCATION_INFO']));
  } 
   
}
