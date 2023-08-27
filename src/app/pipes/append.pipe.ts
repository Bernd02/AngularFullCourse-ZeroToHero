// Custom Pipe
// Class importeren in app.module! > "AppendPipe"
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "append" })
export class AppendPipe implements PipeTransform {
    // ...args: any[] > is hier een "rest operator" > zie eigen docs
    transform(value: any, ...args: any[]) {
        return "City Name - " + value;
    }

}