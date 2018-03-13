/* 
    A Custom module that handles all the material elements this app will use.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatRadioModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatRadioModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatRadioModule, MatTableModule]
})

export class MaterialModule {}
