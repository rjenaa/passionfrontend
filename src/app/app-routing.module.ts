import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecificStatementComponent } from './components/specific-statement/specific-statement.component';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { BarChartViewComponent } from './components/bar-chart-view/bar-chart-view.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "business/:id", component: DashBoardComponent},
  {path: "statements/:id", component: SpecificStatementComponent},
  {path:"chart/expense/:id", component: ChartViewComponent},
  {path:"barchart/:id", component: BarChartViewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
