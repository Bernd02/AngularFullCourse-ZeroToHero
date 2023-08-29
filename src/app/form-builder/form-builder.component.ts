import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
    emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
    contactRegex: string = "[789][0-9]{9}";
    form!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            // [""] representeert fb.control("")
            fullName: ["", [Validators.required, Validators.minLength(5)]],
            email: ["", [Validators.required, Validators.pattern(this.emailRegex), Validators.email]],
            address: ["", [Validators.required]],
            contactDetails: fb.group({
                shippingAddress: ["", [Validators.required]],
                contactNumber: ["", [Validators.required, Validators.pattern(this.contactRegex)]]
            }),
            skills: fb.array([])
        });
    }

    // --------------------------------------------------
    // Getters om syntax in template in te korten
    get fullName(): FormControl {
        return this.form.get("fullName") as FormControl;
    }

    get email(): FormControl {
        return this.form.get("email") as FormControl;
    }

    get address(): FormControl {
        return this.form.get("address") as FormControl;
    }

    get shippingAddress(): FormControl {
        return this.form.get("contactDetails.shippingAddress") as FormControl;
    }

    get contactNumber(): FormControl {
        return this.form.get("contactDetails.contactNumber") as FormControl;
    }

    get skills(): FormArray {
        return this.form.get("skills") as FormArray;
    }

    // --------------------------------------------------
    addSkill(skill: HTMLInputElement): void {
        this.skills.push(
            new FormControl(skill.value)
        );

        // console.log(this.form.value);
        skill.value = "";
    }

    removeSkill(index: number): void {
        this.skills.removeAt(index);
    }

    onSubmit(): void {
        console.log(this.form.value);
    }
}
