import { Component, OnInit } from '@angular/core';
import { Tax } from '../tax';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  tax: Tax = {
    supperanuation: 9.5,
    income: 0
  };

  constructor() {}

  ngOnInit() {}
}
