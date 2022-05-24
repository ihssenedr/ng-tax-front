import { Component, OnInit } from '@angular/core';
import {TaxesService} from "../../services/taxes.service";
import {Tax} from "../../models/tax.model";

@Component({
  selector: 'app-tax-counter',
  templateUrl: './tax-counter.component.html',
  styleUrls: ['./tax-counter.component.css']
})
export class TaxCounterComponent implements OnInit {
  taxes: any[] = []
  constructor(private taxService: TaxesService) { }

  ngOnInit(): void {
    this.taxService.getTaxesByYear().subscribe(value => {
      this.taxes = value
      console.log('getTaxesByYear', this.taxes)
    })
  }

}
