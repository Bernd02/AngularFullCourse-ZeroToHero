import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "List of Post";
  messagePost: string = "Message Post";

  postParentMessage: string = "Message from postParent"

  @Input() childProp: string = "";



  constructor() { }

  ngOnInit(): void {
  }
}
