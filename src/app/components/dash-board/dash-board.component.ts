import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/Business';
import { Statement } from 'src/app/models/Statement';
import { BusinessService } from 'src/app/services/business.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { SalesService } from 'src/app/services/sales.service';
import { StatementsService } from 'src/app/services/statements.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private businessService: BusinessService, private expenseService: ExpensesService, private salesServie: SalesService, private statementService: StatementsService) { }

  business: Business = new Business();

  statements: Statement[] = [];

  ngOnInit(): void {
    this.businessService.fetchBusinessById(1).subscribe(
        data => {
          this.business = data
        },
        error =>{
          console.log(error)
        }
    )
    this.statementService.fetchStatementByAccountId(1).subscribe(
      data =>{
        this.statements = data;
        
      
      }
    )
  }

  expenseToUpload: File = null;

  salesToUpload: File = null;

  handleExpensesInput(files: FileList) {
    this.expenseToUpload = files.item(0);
}

handleSalesInput(files: FileList) {
  this.salesToUpload = files.item(0);
}

uploadExpense(){
  this.expenseService.createExpenses(1, this.expenseToUpload).subscribe(
    data => {
      console.log("expense uploaded")
    },
    error =>{
      console.log(error);
    }
  )
}

uploadSales(){
  this.salesServie.createSales(1, this.salesToUpload).subscribe(
    data => {
      console.log("sales uploaded")
    },
    error =>{
      console.log(error);
    }
  )
}
}



