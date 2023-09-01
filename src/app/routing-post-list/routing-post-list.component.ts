import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-routing-post-list',
    templateUrl: './routing-post-list.component.html',
    styleUrls: ['./routing-post-list.component.css']
})
export class RoutingPostListComponent implements OnInit {
    posts = [
        {
            id: 1,
            title: "Title 1",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit esse optio odio perspiciatis ipsam ab at? Eaque sequi tempora ea facere! Atque, pariatur. Et fugit error adipisci a vitae."
        },
        {
            id: 2,
            title: "Title 2",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit esse optio odio perspiciatis ipsam ab at? Eaque sequi tempora ea facere! Atque, pariatur. Et fugit error adipisci a vitae."
        },
        {
            id: 3,
            title: "Title 3",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit esse optio odio perspiciatis ipsam ab at? Eaque sequi tempora ea facere! Atque, pariatur. Et fugit error adipisci a vitae."
        },
        {
            id: 4,
            title: "Title 4",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit esse optio odio perspiciatis ipsam ab at? Eaque sequi tempora ea facere! Atque, pariatur. Et fugit error adipisci a vitae."
        },
        {
            id: 5,
            title: "Title 5",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit esse optio odio perspiciatis ipsam ab at? Eaque sequi tempora ea facere! Atque, pariatur. Et fugit error adipisci a vitae."
        },
    ]

    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        // Query-parameters lezen
        this.route.queryParamMap.subscribe(queryParamMap => {
            console.log("--- QueryParamMap ---");
            console.log(queryParamMap);

            const page = queryParamMap.get("page");
            const orderBy = queryParamMap.get("orderBy");

            console.log("----------")
            console.log(page);
            console.log(orderBy);
            console.log("----------")
        });
    }






}
