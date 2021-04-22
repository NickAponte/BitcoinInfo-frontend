import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './forum/forum.component';
import { SigninComponent} from './signin/signin.component';
import {NewsComponent} from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'news', component: NewsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
