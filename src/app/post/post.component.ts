import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "List of Post";
  messagePost: string = "Message Post";

  postParentMessage: string = "Message from postParent";

  childMessage: string = "Message from postChild";

  outputChildMessage: string = "Message form postChild via Output"

  @Input() childProp!: string;

  // Dit creëert een niew Event
  // Je triggered dit event via een locale EventHandler > sendMessage
  // Output zorgt ervoor dat dit event kan worden "geoutput via de selector-tag"
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage)
  }
}
