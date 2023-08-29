import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent {


  onSubmit(frm: NgForm) {
    console.log(frm.value);
  }

  getValue(fullNameInput: NgModel) {
    console.log(fullNameInput);
  }
}
