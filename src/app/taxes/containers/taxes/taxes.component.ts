import { Component, OnInit } from '@angular/core';
import {TaxesService} from "../../services/taxes.service";
import {Tax} from "../../models/tax.model";

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
   taxes: Tax[] = []
  constructor(private taxService: TaxesService) { }

  ngOnInit(): void {
    this.taxService.getTaxes().subscribe(value => {
      this.taxes = value
      console.log('this.taxes', this.taxes)
    })
  }

}
