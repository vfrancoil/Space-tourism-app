import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent implements OnInit{

  menuActive:boolean = false;
  ngOnInit(): void {
  }

  mobileMenu() {
    this.menuActive = !this.menuActive;
  }

  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
