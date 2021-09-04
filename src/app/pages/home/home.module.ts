import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path : '' , component : HomeComponent , pathMatch : 'full' }
    ])
  ]
})
export class HomeModule { }
