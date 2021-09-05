import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styles: [
  ]
})
export class DocumentsComponent implements OnInit {
  @Input() highLight : any;
  @Input() right : any;
  @Input() bottom : any;
  @Input() dataVideos : any;

  constructor() { }

  ngOnInit(): void {
  }

}
