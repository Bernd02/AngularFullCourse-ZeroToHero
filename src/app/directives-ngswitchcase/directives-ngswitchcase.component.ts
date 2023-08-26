import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ngswitchcase',
  templateUrl: './directives-ngswitchcase.component.html',
  styleUrls: ['./directives-ngswitchcase.component.css']
})
export class DirectivesNgswitchcaseComponent {
  stepForm: string = "something else"

  onClick(status: string): void {
    this.stepForm = status;
  }
}
