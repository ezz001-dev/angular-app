import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerNav = [
    { name : 'About' , slug : 'about' },
    { name : 'For Bussines' , slug : 'for-bussines' },
    { name : 'Suggestion' , slug : 'suggestion' },
    { name : 'Help & FAQs' , slug : 'help-faq' },
    { name : 'Contact' , slug : 'contact' },
    { name : 'Pricing' , slug : 'pricing' },
  ]

  ngOnInit(): void {
  }

}
