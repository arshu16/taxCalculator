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
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule]
})

export class MaterialModule {}
