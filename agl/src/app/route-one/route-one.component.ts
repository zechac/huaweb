import { Component, OnInit } from '@angular/core';
import { DyComponent } from './dy/dy.component'
@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showComp(comp){
    debugger
  }

}
