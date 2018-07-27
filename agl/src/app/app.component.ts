import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router ,Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
  ]
})
export class AppComponent {
  title = 'app';

  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router
  ) {}

  itemClick(id){
    this.router.navigate(["route","one"])
  }
}
