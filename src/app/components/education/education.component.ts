import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education:any=[]
  constructor(public constantService: ConstantService,) { }
  

  ngOnInit(): void {
    this.education = this.constantService.getEducation();
    console.log(this.education)
  }

}
