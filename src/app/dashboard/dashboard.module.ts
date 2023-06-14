import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { CounterModule } from '../counter/counter.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CounterModule
  ], exports: [DashboardComponent]
})
export class DashboardModule { }
