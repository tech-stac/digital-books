import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { SearchPagesComponent } from './components/search-pages/search-pages.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPagesComponent
  },
  {
    path: 'create',
    component: CreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
