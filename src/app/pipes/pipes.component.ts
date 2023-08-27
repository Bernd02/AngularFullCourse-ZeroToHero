import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title: string = "Angular Course";

  count: number = 285645;
  decValue: number = 3.85674;

  price: number = 99.99;

  today: Date = new Date();

  postObj: object = { id: 1, postTitle: "Post 1" };

  postArray: Array<string> = ["post 1", "post 2", "post 3", "post 4", "post 5"];

  // Custom Pipe
  userDetails: any = {
    name: "user 1",
    city: "NewYork",
    countryCode: "US"
  };

  // Custom Pipe - With arguments
  dummyText: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo illo, nobis temporibus eius praesentium vero voluptatum fuga eaque ipsa animi itaque delectus molestiae quasi accusamus natus aspernatur est voluptates in!";



}
