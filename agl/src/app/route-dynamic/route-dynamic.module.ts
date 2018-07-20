import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteDynamicRoutingModule } from './route-dynamic-routing.module';
import { DyOneComponent } from './dy-one/dy-one.component';

@NgModule({
  imports: [
    CommonModule,
    RouteDynamicRoutingModule
  ],
  declarations: [DyOneComponent]
})
export class RouteDynamicModule { }
