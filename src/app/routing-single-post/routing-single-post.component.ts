import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-routing-single-post',
    templateUrl: './routing-single-post.component.html',
    styleUrls: ['./routing-single-post.component.css']
})
export class RoutingSinglePostComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Zie RoutingComponent voor Theorie specifiek voor Observable

        this.route.paramMap
            .subscribe(paramMap => {
                // console.log(paramMap);
                let id = paramMap.get("id");
                let title = paramMap.get("title");

                console.log(id);
                console.log(title);
            });
    }
}
