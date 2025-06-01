import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { WorkComponent } from './Components/work/work.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { EducationComponent } from './Components/about/nestedComponent/education/education.component';
import { CollegeComponent } from './Components/about/nestedComponent/college/college.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent , children:[
    
    {path:'education',component:EducationComponent},
    {path:'college',component:CollegeComponent},
  ]},
  {path:'skills',component:SkillsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'work',component:WorkComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
