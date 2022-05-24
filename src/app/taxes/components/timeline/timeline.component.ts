import {Component, Input, OnInit} from '@angular/core';
import {Tax} from "../../models/tax.model";
import {TaxesService} from "../../services/taxes.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
   data: Tax[] = [];
  constructor(private taxService: TaxesService) { }

  ngOnInit(): void {
    this.taxService.getTaxes().subscribe(value => {
      this.data = value
      console.log('this.taxes timeline', this.data)
    })
  }
}
