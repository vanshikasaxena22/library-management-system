import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksComponent } from './books/books.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';

const routes: Routes = [{path:"library-management-system/home",component:HomePageComponent},
  {path:"library-management-system/books",component:BooksComponent},
  {path:"library-management-system/contactus",component:ContactusComponent},
  {path:"library-management-system/home/login",component:UserLoginComponent},
  {path:"library-management-system/home/login/admin",component:AdminDashboardComponent},
  {path:"library-management-system/home/signup",component:UserSignupComponent},
  {path:'**',redirectTo:'/library-management-system/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
