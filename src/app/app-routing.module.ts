import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const loggedin= window.localStorage.getItem('isloggedin')
const routes: Routes = [
  {path:'', redirectTo: '/chinmay', pathMatch:'full'},

  {path:'chinmay', component:PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
