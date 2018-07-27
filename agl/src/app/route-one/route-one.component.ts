import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { DyComponent } from './dy/dy.component'
import {DyItemOneComponent } from './dy-item-one/dy-item-one.component'
import { DyItemTwoComponent } from './dy-item-two/dy-item-two.component'
@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {

  compList:any=[DyItemOneComponent,DyItemTwoComponent,DyItemOneComponent,DyItemTwoComponent]

  @ViewChild(DyComponent) dyComponent: DyComponent;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  showComp(comp:any){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.compList[comp]);

    let viewContainerRef = this.dyComponent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
