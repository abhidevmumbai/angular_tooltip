import { Component } from '@angular/core';

import { TooltipService } from './tooltip.service';

@Component({
  selector: 'tooltip-container',
  template: `
    <div class="tooltip-container">
      <tooltip-content
        *ngFor="let tooltip of tooltipService.components"
        [title]="tooltip.title"
        [ref]="tooltip.ref">
      </tooltip-content>
    </div>
  `
})
export class TooltipContainerComponent {

  constructor(private tooltipService: TooltipService) { }

}