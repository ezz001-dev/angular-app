import { Component, OnInit , Renderer2  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private renderer : Renderer2 ) { }

  isOpen = false;


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

  openMobile()
  {

    let body = document.getElementById('body');

    this.isOpen = !this.isOpen;
    this.isOpen ? this.renderer.addClass(body,'overflow-hidden') : this.renderer.removeClass(body,'overflow-hidden');
    
  }

}
