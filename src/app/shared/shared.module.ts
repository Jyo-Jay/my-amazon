import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    ReactiveFormsModule,// To Create ReactiveForm
    FormsModule, // it need for ngModel
    HttpClientModule, // to used HttpClient Service of it
    CommonModule
  ]
})
export class SharedModule { }
