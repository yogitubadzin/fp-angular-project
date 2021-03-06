import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { InputRefDirective } from './input-ref.directive';
import { InputSearchComponent } from './input-search/input-search.component';
import { LoggedInDirective } from './logged-in.directive';
import { NotLoggedInDirective } from './not-logged-in.directive';

@NgModule({
  declarations: [
    InputComponent,
    PageNotFoundComponent,
    NavigationComponent,
    InputRefDirective,
    InputSearchComponent,
    LoggedInDirective,
    NotLoggedInDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    InputComponent,
    PageNotFoundComponent,
    NavigationComponent,
    InputRefDirective,
    InputSearchComponent,
    LoggedInDirective,
    NotLoggedInDirective,
  ],
})
export class SharedModule {}
