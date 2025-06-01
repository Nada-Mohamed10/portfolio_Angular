import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { WorkComponent } from './Components/work/work.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { EducationComponent } from './Components/about/nestedComponent/education/education.component';
import { CollegeComponent } from './Components/about/nestedComponent/college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    SidebarComponent,
    NotFoundComponent,
    EducationComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
