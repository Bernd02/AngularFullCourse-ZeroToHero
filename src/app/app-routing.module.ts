import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPostListComponent } from './routing-post-list/routing-post-list.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingSinglePostComponent } from './routing-single-post/routing-single-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "", component: RoutingHomeComponent },
    { path: "posts", component: RoutingPostListComponent },
    //   { path: "post/:id", component: RoutingSinglePostComponent },
    { path: "post/:id/:title", component: RoutingSinglePostComponent },

    // WildCard Component altijd als laatste in de routerList plaatsen.
    // De routerList werkt met patterMatching, wanneer een url matcht
    // > wordt deze geselecteerd, en wordt er niet meer verder gekeken.
    // > "**" matcht dus met alles
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
