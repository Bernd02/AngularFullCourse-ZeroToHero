import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-post-user2',
    templateUrl: './post-user2.component.html',
    styleUrls: ['./post-user2.component.css']
})
export class PostUser2Component implements OnInit {
    postList!: Array<any>;

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postList = this.postService.postList;
    }
}
