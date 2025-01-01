import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() scrollTo = new EventEmitter<any>();


  constructor(public constantService: ConstantService,) { }
  

  ngOnInit(): void {

  }

}
