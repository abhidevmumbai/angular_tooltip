import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  tooltipText: string = "This is a tooltip";
  
  constructor() {}

  ngOnInit() {

  }
}
