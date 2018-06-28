import { Directive, HostListener, Input, OnDestroy, ElementRef } from '@angular/core';

import { TooltipService } from './tooltip.service';

@Directive({ selector: '[my-tooltip]' })
export class TooltipDirective implements OnDestroy {

  @Input() tooltipTitle: string = '';
  private id: number;

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }
  
  @HostListener('click')
  onClick(): void {
    this.id = Math.random();
    this.tooltipService.components.push({ 
      id: this.id, 
      ref: this.element, 
      title: this.tooltipTitle 
    });
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.destroy();
  }
  
  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    const idx = this.tooltipService.components.findIndex((t) => { 
      return t.id === this.id; 
    });

    this.tooltipService.components.splice(idx, 1);
  }
  
}