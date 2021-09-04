import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  highLight : any[] = [];
  right     : any[] = [];
  bottom    : any[] = [];
  isLoad = false;

  dataVideos : any = [
    { title : 'How To Improve Your Skill ' , name : 'Washem Arshad' , totalViews : '18090' , status : 'higlight' },
    { title : 'How To Improve Your Skill 2' , name : 'Washem Arshad' , totalViews : '18090' , status : 'right' },
    { title : 'How To Improve Your Skill 3' , name : 'Washem Arshad' , totalViews : '18090' , status : 'right' },
    { title : 'How To Improve Your Skill 4' , name : 'Washem Arshad' , totalViews : '18090' , status : 'bottom' },
    { title : 'How To Improve Your Skill 5' , name : 'Washem Arshad' , totalViews : '18090' , status : 'bottom' },
  ]

  constructor() { }

  ngOnInit(): void {

    // this.highLight = this.dataVideos[0];
    this.dataVideos.forEach(e => {
      if(e.status === 'right'){
        this.right.push(e);
      }else if(e.status === 'bottom'){
        this.bottom.push(e)
      }else{
        this.highLight.push(e);
      }
    });

    this.isLoad = true;

  }

  

}
