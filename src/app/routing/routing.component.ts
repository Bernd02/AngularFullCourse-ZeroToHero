import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
    // Router Service injecteren
    // > om naar view te gaan via TypeScript-Method
    // > en niet via view - html-element
    constructor(private router: Router) { }

    ngOnInit(): void {
        const obsTest$ = new Observable(observer => {
            // obeserver:Subscriber > is het object dat de data ophaalt

            // Onderstaande wordt slechts uitgevoerd
            // ... wanneer de subscribe-method wordt uitgevoerd
            console.log("--- Printed from observable ---");

            // asynchronous
            setTimeout(() => {
                observer.next("--- Return form observable timeout 2s ---")
            }, 2000);

            // synchronous
            observer.next("--- Return 1 from observable ---");
            observer.next("--- Return 2 from observable ---");
            observer.next("--- Return 3 from observable ---");

        }).subscribe(value => {
            // .subscribe > voert de callBack uit dat de opgehaalde data verwerkt
            // Logt alle returnValues van de observer
            // > synchroon of asynchroon
            console.log(value);
        });

        // Meestal opent een observable een connectie met externe DataBase
        // > Dan is het best deze connectie ook te beëindigen op een bepaald moment
        // ... > om geen memory-leak te hebben
        // ... > om de connectie terug vrij te maken voor andere

        setTimeout(() => {
            obsTest$.unsubscribe();
        },
            // Wanneer timeout < 2000 ms
            // > dan wordt de async data niet gevonden en niet gelogged
            3000);
    }


    // --------------------------------------------------
    // Navigeren naar view via TypeScript-Method
    onSubmit(): void {
        // # Route
        // this.router.navigate(["/posts"]);

        // # Route + RouteParameters
        // this.router.navigate(["/post", 3, "postTitle"]);
        // this.router.navigate(["/post", "3-Tralala", "postTitle-OleOle"]);

        // # Route + QueryParameters
        this.router.navigate(
            ["/posts"],
            {
                queryParams: {
                    page: "1",
                    orderBy: "newest"
                }
            });
    }



}
