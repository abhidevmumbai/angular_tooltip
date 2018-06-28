import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent
  }
]);

@NgModule({
  imports : [
    homeRouting
  ],
  declarations : [
    HomeComponent
  ]
})

export class HomeModule {}