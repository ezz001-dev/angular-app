import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  listNav : any = [
    { name : 'Videos' },
    { name : 'People' },
    { name : 'Documents' },
    { name : 'Events' },
    { name : 'Comunities' },
    { name : 'Favorites' },
    { name : 'Chanels' },
  ]

  ngOnInit(): void {
  }

}
