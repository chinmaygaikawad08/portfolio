import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: any = []
  constructor(public constantService: ConstantService,) { }


  ngOnInit(): void {
    this.experience = this.constantService.getExperience();
    console.log(this.experience)
  }

}
