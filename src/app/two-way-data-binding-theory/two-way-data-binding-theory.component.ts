import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-theory',
  templateUrl: './two-way-data-binding-theory.component.html',
  styleUrls: ['./two-way-data-binding-theory.component.css']
})
export class TwoWayDataBindingTheoryComponent {
  // # String Interpolation
  message: string = "Message from Typescript Component File";

  // # Property Binding
  imgUrl: string = "https://chocolates.com.pe/wp-content/uploads/2019/02/ole-ole.png";

  // # Class Binding
  trueFalse: boolean = false;

  // # Event Binding
  buttonClick(): void {
    console.log("Ole Ole");
  }

  // # Event Filtering
  onKeyUp(eventObject: any) {
    if (eventObject.keyCode === 13) {
      console.log("Enter key pressed");
    }
  }

  onKeyUp2() {
    console.log("Enter key pressed");
  }

  // # Template Variable
  // js-manier
  onKeyUp3(event: any) {
    // Waarde van input-tag verkrijgen
    console.log(event.target.value);
  }

  // Angular manier
  onKeyUp4(inputWaarde: HTMLInputElement) {
    // Waarde van input-tag verkrijgen
    console.log(inputWaarde.value);
  }

  // # Two-way DataBinding
  userName!: string;

}
