import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlDirective, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-reactive',
    templateUrl: './form-reactive.component.html',
    styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
    emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
    contactRegex: string = "[789][0-9]{9}";

    form = new FormGroup({
        fullName: new FormControl("", [Validators.required, Validators.minLength(5)]),
        email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex), Validators.email]),
        address: new FormControl("", [Validators.required]),
        contactDetails: new FormGroup({
            shippingAddress: new FormControl("", [Validators.required]),
            contactNumber: new FormControl("", [Validators.required, Validators.pattern(this.contactRegex)]),
        }),

        skills: new FormArray([]),
    });

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