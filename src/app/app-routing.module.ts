import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksComponent } from './books/books.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [{path:"library-management-system/home",component:HomePageComponent},
  {path:"library-management-system/books",component:BooksComponent},
  {path:"library-management-system/contactus",component:ContactusComponent},
  {path:'**',redirectTo:'/library-management-system/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
