import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(public constantService: ConstantService,) { }
  

  ngOnInit(): void {

  }

}
