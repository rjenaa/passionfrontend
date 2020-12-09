import { Statement } from '../../models/Statement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatementsService } from 'src/app/services/statements.service';

@Component({
  selector: 'app-specific-statement',
  templateUrl: './specific-statement.component.html',
  styleUrls: ['./specific-statement.component.css']
})
export class SpecificStatementComponent implements OnInit {

  constructor(private statementService:StatementsService, private router: Router, private activatedRouter: ActivatedRoute) { }

  statement: Statement;

  statId:number;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params[`id`];
    this.statementService.fetchStatementById(id).subscribe(
      data =>{
        this.statement = data;
        this.statId = this.statement.id;
      }
    )
  }

  goBack(){
    this.router.navigate([`business/` + this.statement.accountId])
  }

}
