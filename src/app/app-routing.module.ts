import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path: '', redirectTo: '/dash', pathMatch: 'full'},
  {path: 'dash', component: DashComponent},
  {path: 'display', component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
