import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { SpecificStatementComponent } from './components/specific-statement/specific-statement.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { BarChartViewComponent } from './components/bar-chart-view/bar-chart-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesDougnutComponent } from './components/sales-dougnut/sales-dougnut.component';
import { SalesBarComponent } from './components/sales-bar/sales-bar.component';

import { ExpenseBarComponent } from './components/expense-bar/expense-bar.component'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashBoardComponent,
    LandingPageComponent,
    RegisterComponent,
    SpecificStatementComponent,
    ChartViewComponent,
    BarChartViewComponent,
    SalesDougnutComponent,
    SalesBarComponent,
    ExpenseBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
