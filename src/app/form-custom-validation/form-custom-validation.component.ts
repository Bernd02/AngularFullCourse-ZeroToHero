import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
    selector: 'app-form-custom-validation',
    templateUrl: './form-custom-validation.component.html',
    styleUrls: ['./form-custom-validation.component.css']
})
export class FormCustomValidationComponent {
    Form!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.Form = fb.group({
            UserName: ["", [Validators.required, Validators.minLength(5), noSpace.noSpaceValidations]],
            Password: ["", [Validators.required]]
        });
    }

    // --------------------------------------------------
    get UserName(): FormControl {
        return this.Form.get("UserName") as FormControl;
    }

    get Password(): FormControl {
        return this.Form.get("Password") as FormControl;
    }

    onSumbit() {
        console.log(this.Form.value);
    }
}
