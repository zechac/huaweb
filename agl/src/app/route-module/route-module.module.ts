import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RouteOneComponent} from '../route-one/route-one.component'

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
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RouteModuleModule { }
