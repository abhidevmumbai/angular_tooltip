import { Component, HostListener, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'tooltip-content',
  template: `
    <div class="alert alert-info" [innerHTML]="title"></div>
  `
})
export class TooltipContentComponent implements AfterViewInit {

  @Input() title: string;
  @Input() ref: any;

  ngAfterViewInit(): void {
    // position based on `ref`
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    // update position based on `ref`
  }

}