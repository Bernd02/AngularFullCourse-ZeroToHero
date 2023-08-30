import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCliPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostUser1Component } from './post-user1/post-user1.component';
import { PostUser2Component } from './post-user2/post-user2.component';
import { PostService } from './services/post.service';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormCustomValidationComponent } from './form-custom-validation/form-custom-validation.component';

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
    DirectivesTaskComponent,
    PipesComponent,
    AppendPipe,
    AppendCliPipe,
    SummaryPipe,
    PostUser1Component,
    PostUser2Component,
    FormTemplateDrivenComponent,
    FormReactiveComponent,
    FormBuilderComponent,
    FormCustomValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // 1 enkele instantie! > Singleton
    // Op deze manier is geen @Inject decorator nodig
    // PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
