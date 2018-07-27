import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RouteOneComponent} from '../route-one/route-one.component'
import {MatButtonModule} from '@angular/material/button';
import { DyComponent } from '../route-one/dy/dy.component';

const routes: Routes = [
  {
    path: 'route/one',
    component: RouteOneComponent
  }
  // {
  //   path: '',
  //   loadChildren: 'app/route-dynamic/route-dynamic.module#RouteOneComponent'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  declarations:[DyComponent,RouteOneComponent],
  exports:[RouterModule]
})
export class RouteModuleModule { }
