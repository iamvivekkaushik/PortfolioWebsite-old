import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BiotreeComponent} from './biotree/biotree.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'biotree', component: BiotreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
