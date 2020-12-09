import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/models/Expense';
import { Color } from 'ng2-charts';
import { Sales } from 'src/app/models/Sales';
import { Statement } from 'src/app/models/Statement';
import { ExpensesService } from 'src/app/services/expenses.service';
import { SalesService } from 'src/app/services/sales.service';
import { StatementsService } from 'src/app/services/statements.service';

@Component({
  selector: 'app-sales-dougnut',
  templateUrl: './sales-dougnut.component.html',
  styleUrls: ['./sales-dougnut.component.css']
})
export class SalesDougnutComponent implements OnInit {

  constructor(private salesService: SalesService, private statementsService:StatementsService ,private expenseService: ExpensesService, private activatedRoute: ActivatedRoute) { }

  statement: Statement;

  expenses: Expense[] = [];

  sales : Sales[] = [];

  salesAmount = [];

  salesDescripton = [];

  salesDrink = [];




  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];

    this.statementsService.fetchStatementById(id).subscribe(
      data => {
          this.statement = data;
          this.expenses = this.statement.expenses;
          this.sales = this.statement.sales;
          
            for (const sale of this.sales) {
            this.salesAmount.push(sale.food);
            this.salesDrink.push(sale.drinks);
            this.salesDescripton.push(sale.date);

          }
        }
      
    )
      }

      public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels = this.salesDescripton;
      public barChartType = 'bar';
      public barChartLegend = true;
      public barChartData = [
        {data: this.salesDrink, label: 'Drinks'},
        {data: this.salesAmount, label: 'Food'}
      ];
  
}
