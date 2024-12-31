import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSearchFilterPipe, NgSearchFilterModule, NgSearchFilterService } from 'ng-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
/* import { AngularFireMessagingModule } from '@angular/fire/messaging'; */
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, FormsModule, NgSearchFilterModule, NgMultiSelectDropDownModule.forRoot(), InfiniteScrollModule, AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBHjfu5_sM5FyDkVpgqIJ1DJsot3EAIzcg",

      authDomain: "hopfirst-65914.firebaseapp.com",

      databaseURL: "https://hopfirst-65914.firebaseio.com",

      projectId: "hopfirst-65914",

      storageBucket: "hopfirst-65914.appspot.com",

      messagingSenderId: "189210679564",

      appId: "1:189210679564:web:a74c91b1370c1a55981129",

      measurementId: "G-QN9GJ1V0P2",
    }),
  ],
  exports: [ExperienceComponent, EducationComponent, SkillsComponent],
  providers: [
    AsyncPipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
