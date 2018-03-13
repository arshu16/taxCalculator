import { Component, OnInit } from '@angular/core';
import * as StateType from './store/app.reducer';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tax Calculator';
  constructor(private store: Store<StateType.AppStore>) {}
  ngOnInit() {}
}
