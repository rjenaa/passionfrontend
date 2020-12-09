import { Statement } from './../../models/Statement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/models/Expense';
import { Sales } from 'src/app/models/Sales';
import { StatementsService } from 'src/app/services/statements.service';

@Component({
  selector: 'app-bar-chart-view',
  templateUrl: './bar-chart-view.component.html',
  styleUrls: ['./bar-chart-view.component.css']
})
export class BarChartViewComponent implements OnInit {

  constructor(private statementService: StatementsService, private activatedRoute: ActivatedRoute) { }

  statement: Statement;

  expenses: Expense[] = [];

  sales : Sales[] = [];

  expensesAmount = [];

  expensesDescripton = [];

  salesAmount = [];

  salesDescripton = [];

  dates = [];

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.statementService.fetchStatementById(id).subscribe(
      data => {
        this.statement = data;
        this.sales = this.statement.sales;
        this.expenses = this.statement.expenses;
        for (const expense of this.expenses) {
          this.expensesAmount.push(expense.amount);
          this.expensesDescripton.push(expense.description);
          this.dates.push(expense.date)
        }
        for (const sale of this.sales) {
          this.salesAmount.push(sale.total);
          this.salesDescripton.push(sale.description);
        }

      }
    )
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.dates;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.expensesAmount, label: 'Expenses'},
    {data: this.salesAmount, label: 'Sales'}
  ];

  

}
