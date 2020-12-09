import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'ng2-charts';
import { Expense } from 'src/app/models/Expense';
import { Sales } from 'src/app/models/Sales';
import { Statement } from 'src/app/models/Statement';
import { ExpensesService } from 'src/app/services/expenses.service';
import { SalesService } from 'src/app/services/sales.service';
import { StatementsService } from 'src/app/services/statements.service';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {

  constructor(private salesService: SalesService, private statementsService:StatementsService ,private expenseService: ExpensesService, private activatedRoute: ActivatedRoute) { }

  statement: Statement;

  expenses: Expense[] = [];

  sales : Sales[] = [];

  expensesAmount = [];

  expensesDescripton = [];


  public doughnutChartLabels = this.expensesDescripton;
  public doughnutChartData = this.expensesAmount;
  public doughnutChartType = 'doughnut';

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];

    this.statementsService.fetchStatementById(id).subscribe(
      data => {
          this.statement = data;
          this.expenses = this.statement.expenses;
          this.sales = this.statement.sales;
          
            for (const expense of this.expenses) {
            this.expensesAmount.push(expense.amount);
            this.expensesDescripton.push(expense.description);
          }
        }
      
    )
      }
    
  

  colors: Color[] = [
    {
      backgroundColor: [
        '#35606F', '#228B8D', '#45B592', 'purple', '#95DB82', '#F9F871', 'blue'
      ]
    }
  ]
  

}
// barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
//   barChartType: ChartType = 'bar';
//   barChartLegend = true;
//   barChartPlugins = [];

//   barChartData: ChartDataSets[] = [
//     { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
//   ];