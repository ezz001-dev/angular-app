import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-section-global',
  templateUrl: './section-global.component.html',
  styles: [
  ]
})
export class SectionGlobalComponent implements OnInit {
  @Input() highLight : any;
  @Input() right : any;
  @Input() bottom : any;
  @Input() dataVideos : any;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
      console.log(this.highLight);
    // }, 1000);
  }

}
