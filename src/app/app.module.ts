import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TooltipDirective } from './tootlip/tooltip.directive';
import { TooltipContainerComponent } from './tootlip/tooltip-container.component';
import { TooltipContentComponent } from './tootlip/tooltip-content.component';
import { TooltipService } from './tootlip/tooltip.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([{
	    path: 'home',
	    component: HomeComponent
	}],
	{
		useHash: false,
		enableTracing: true
	});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TooltipDirective,
    TooltipContainerComponent,
    TooltipContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
