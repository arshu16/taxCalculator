import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';

import * as FromGeneralReducers from './../store/general/general.reducers';
import * as FromGeneralActions from './../store/general/general.actions';
import { ResultItem } from './../store/models/result-item';
import { TAX_KEY_TO_HUMAN_MAP } from './../shared/constants';
import { Tax } from '../tax';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})

export class TaxComponent implements OnInit {
  displayedColumns = ['value', 'amount'];
  dataSource = new MatTableDataSource([]);
  tax: FormGroup;
  @ViewChild('superannuationElement') superannuationElement: any;

  constructor(
    private store: Store<{ general: FromGeneralReducers.GeneralState }>
  ) {
    this.initForm();
  }

  initForm() {
    this.tax = new FormGroup({
      superannuation: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.min(9.5),
          Validators.max(100)
        ])
      ),
      income: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(1000000000) //One Billion, Anything more than that and you don't need to use this
        ])
      ),
      'income-type': new FormControl(
        'exclusive',
        Validators.compose([Validators.required])
      )
    });
  }

  ngOnInit() {
    this.store.select('general').subscribe(data => {
      this.dataSource.data = <any []>data;
    });
  }

  /**
   * This function returns tax after calculation based on income brackets
   *
   * @param {number} income
   * @returns {number}
   * @memberof TaxComponent
   */
  getTax(income: number): number {
    let tax = 0;
    if (income < 18200) {
      return tax;
    } else if (income > 18200 && income <= 37000) {
      return 0.19 * (income - 18200);
    } else if (income > 37000 && income <= 87000) {
      return 3572.325 + 1 * (income - 37000);
    } else if (income > 87000 && income <= 180000) {
      return 19822.37 + 1 * (income - 87000);
    } else if (income > 180000) {
      return 54232.45 + 1 * (income - 180000);
    }
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) return;
    let gross, superannuation, superannuationAmount, total, tax, net, netTotal;
    switch (form.value['income-type']) {
      case 'exclusive': {
        gross = form.value.income;
        superannuation = form.value.superannuation;
        superannuationAmount =
          form.value.superannuation * form.value.income / 100;
        total = superannuationAmount + form.value.income;
        tax = this.getTax(total);
        net = total - tax;
        netTotal = superannuationAmount + net;
        break;
      }
      case 'inclusive': {
        total = form.value.income;
        superannuation = form.value.superannuation;
        gross = total / (1 + superannuation / 100);
        superannuationAmount = form.value.superannuation * gross / 100;
        tax = this.getTax(total);
        net = total - tax;
        netTotal = superannuationAmount + net;
        break;
      }
    }
    let Result = {
      superannuationAmount: superannuationAmount,
      gross: form.value.income,
      total: superannuationAmount + form.value.income,
      tax: this.getTax(total),
      net: total - tax,
      netTotal: superannuationAmount + net
    };
    this.generateTable(Result);
  }

  clearForm(form: FormGroup): void {
    this.store.dispatch(new FromGeneralActions.ClearResult());
    this.superannuationElement.nativeElement.focus();
  }

  generateTable(Result: any = {}): void {
    var result = Object.keys(Result).map(key => {
      return <ResultItem>{ value: TAX_KEY_TO_HUMAN_MAP[key], amount: Result[key] };
    });
    this.store.dispatch(new FromGeneralActions.AddResult(result));
  }

  getParsedAmount(amount: number): string {
    return `$${amount | 0} ${
      Math.round((amount % 1) * 1000) / 10
        ? `plus ${Math.round((amount % 1) * 1000) / 10}c`
        : ''
    }`;
  }
}
