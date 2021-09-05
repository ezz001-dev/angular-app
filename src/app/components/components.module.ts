import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGlobalComponent } from './section-global/section-global.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [SectionGlobalComponent],
  exports : [
    SectionGlobalComponent
  ]
})
export class ComponentsModule { }
