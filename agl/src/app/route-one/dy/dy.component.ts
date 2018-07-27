import { Component, OnInit } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dy',
  templateUrl: './dy.component.html',
  styleUrls: ['./dy.component.css']
})
export class DyComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
