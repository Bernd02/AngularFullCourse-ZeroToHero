import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
    selector: 'app-post-user1',
    templateUrl: './post-user1.component.html',
    styleUrls: ['./post-user1.component.css'],
    // DI locaal instellen > in mijn ogen standaard niet de bedoeling
    // ... neemt het doel van DI weg
    // ... Globale klasse blijgt een verantwoordelijkheid tot initialisatie hebben
    // ... compromitteert onderhoud
    // providers: [PostService]
})
export class PostUser1Component implements OnInit {
    posts!: Array<any>;

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.posts = this.postService.postList;
    }

    addNewData(): void {
        let newPost: Post = {
            id: 7,
            postTitle: "Post 7"
        };

        this.postService.addPost(newPost);
    }
}
