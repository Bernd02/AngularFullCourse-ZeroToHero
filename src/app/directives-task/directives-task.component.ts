import { Component } from '@angular/core';

interface User {
    name: string;
    email: string;
    address: string;
}

@Component({
    selector: 'app-directives-task',
    templateUrl: './directives-task.component.html',
    styleUrls: ['./directives-task.component.css']
})
export class DirectivesTaskComponent {
    name!: string;
    email!: string;
    address!: string;

    userArray: Array<User> = [];


    onClick(): void {
        if (this.name && this.email && this.address) {
            this.userArray.push({
                name: this.name,
                email: this.email,
                address: this.address
            });
        }
    }

    onDelete(index: number): void {
        this.userArray.splice(index, 1);
    }
}
