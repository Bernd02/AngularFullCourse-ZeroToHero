import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayDataBindingTheoryComponent } from './two-way-data-binding-theory/two-way-data-binding-theory.component';
import { TaskTwoWayDataBindingComponent } from './task-two-way-data-binding/task-two-way-data-binding.component';
import { DirectivesNgifNgforComponent } from './directives-ngif-ngfor/directives-ngif-ngfor.component';
import { DirectivesNgswitchcaseComponent } from './directives-ngswitchcase/directives-ngswitchcase.component';
import { DirectivesNgstyleComponent } from './directives-ngstyle/directives-ngstyle.component';
import { DirectivesNgclassComponent } from './directives-ngclass/directives-ngclass.component';
import { DirectivesTaskComponent } from './directives-task/directives-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    DataBindingComponent,
    TwoWayDataBindingTheoryComponent,
    TaskTwoWayDataBindingComponent,
    DirectivesNgifNgforComponent,
    DirectivesNgswitchcaseComponent,
    DirectivesNgstyleComponent,
    DirectivesNgclassComponent,
    DirectivesTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
