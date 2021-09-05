import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: [
  ]
})
export class PeopleComponent implements OnInit {
  @Input() highLight : any;
  @Input() right : any;
  @Input() bottom : any;
  @Input() dataVideos : any;

  constructor() { }

  ngOnInit(): void {
  }

}
