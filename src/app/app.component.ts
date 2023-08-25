import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngIntro';
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
