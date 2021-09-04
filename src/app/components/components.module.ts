import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGlobalComponent } from './section-global/section-global.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SectionGlobalComponent],
  exports : [
    SectionGlobalComponent
  ]
})
export class ComponentsModule { }
