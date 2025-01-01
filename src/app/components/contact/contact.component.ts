import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/Constant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent implements OnInit {
  constructor(public constantService: ConstantService,) { }
  contact = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Contact form submitted:', this.contact);
    // Add your form submission logic here (e.g., call an API)
  }

}
