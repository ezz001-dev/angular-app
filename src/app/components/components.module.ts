import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGlobalComponent } from './section-global/section-global.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [SectionGlobalComponent, PeopleComponent, DocumentsComponent],
  exports : [
    SectionGlobalComponent,
    PeopleComponent,
    DocumentsComponent
  ]
})
export class ComponentsModule { }
