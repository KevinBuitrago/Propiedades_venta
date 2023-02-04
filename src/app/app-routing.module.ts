import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./components/start/start.component";
import { HomeDetailsComponent } from "./components/home-details/home-details.component";


const routes: Routes = [
  { path:'', redirectTo: 'Start', pathMatch: 'full'},
  { path:'Start', component: StartComponent},
  { path:'detail/:id', component: HomeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
