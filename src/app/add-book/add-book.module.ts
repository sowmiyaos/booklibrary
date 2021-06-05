import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:"",
    component: AddBookComponent
  }
];

@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule
  ]
})
export class AddBookModule { }
