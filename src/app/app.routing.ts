import { Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';
import { PageNotfoundComponent } from './common/404.component';


export const ROUTE: Routes = [
  { path: '', redirectTo: 'tax', pathMatch: 'full' },
  {path: 'tax', component: TaxComponent},
  { path: '404', component: PageNotfoundComponent },
  { path: '**', redirectTo: '404' }
];