import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PostComponent } from './post/post.component';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
