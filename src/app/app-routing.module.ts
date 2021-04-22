import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './forum/forum.component';
import { SigninComponent} from './signin/signin.component';
import {NewsComponent} from './news/news.component';
const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
