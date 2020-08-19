import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { DetailsComponent } from './details/details.component';
import { AddBarComponent } from './add-bar/add-bar.component';


const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'pubDetail/:id', component: DetailsComponent },
  { path: 'addBar', component: AddBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
