import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  parentMessage: string = "Message changed";

  // --------------------------------------------------
  // Property van Child inlezen
  // > Deze methode geeft een ERROR!
  // > Volgens mij is dit bad-practise
  // > Oplossing = ChangeDetectorRef injecteren
  // @ViewChild(PostComponent) childComp!: PostComponent;
  // message!: string;
  // ngAfterViewInit(): void {
  //   // console.log(this.childComp);
  //   this.message = this.childComp.childMessage;
  //   this.cd.detectChanges(); // Hacky!
  // }

  // constructor(private cd: ChangeDetectorRef) {
  //   // console.log(this.childComp);
  // }

  fromChildOutput!: string;

  constructor() {
    // console.log(this.childComp);
  }

  receiveMessage(eventMessage: string) {
    console.log(eventMessage);
    this.fromChildOutput = eventMessage;
  }
}
