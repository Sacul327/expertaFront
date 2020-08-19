import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { BarService } from './services/bar.service';
import { DetailsComponent } from './details/details.component';
import { AddBarComponent } from './add-bar/add-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailsComponent,
    AddBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
