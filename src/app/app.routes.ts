import { Routes } from '@angular/router';

import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {AboutPageComponent} from "./Pages/about-page/about-page.component";
import {ContactPageComponent} from "./Pages/contact-page/contact-page.component";
import {StudentCreateComponent} from "./Pages/student-create/student-create.component";
import {StudentPageComponent} from "./Pages/student-page/student-page.component";

export const routes: Routes = [
  { path: '',component:HomePageComponent, title: "Home Page" },
  { path: 'about-us', component:AboutPageComponent,title:"About Page" },
  { path: 'contact-us', component:ContactPageComponent, title:"Contact Page" },
  { path: 'students/create', component:StudentCreateComponent, title:"Student Create" },
  {path: 'students', component: StudentPageComponent, title: "Student Page"}

];
