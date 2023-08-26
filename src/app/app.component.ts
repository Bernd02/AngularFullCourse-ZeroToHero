import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "AngIntro";

  // --------------------------------------------------
  postArray: Array<string> = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"];
  toonArray: boolean = true;

  // objArray: Array<any> = [
  objArray: Array<{ id: number, postTitle: string }> = [
    { id: 1, postTitle: "post1" },
    { id: 2, postTitle: "post2" },
    { id: 3, postTitle: "post3" },
    { id: 4, postTitle: "post4" },
    { id: 5, postTitle: "post5" },
  ];

  addNew(): void {
    let _id: number = this.objArray.length + 1;
    this.objArray.push({ id: _id, postTitle: `post${_id}` });
  }

  onDelete(index: number): void {
    // let index: number = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }

}
