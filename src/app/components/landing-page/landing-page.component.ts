import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private businessService: BusinessService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(id, location){
    this.router.navigate([`business/`+id])
    
  }


}
