import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  message: String = 'hallo';
  navOpen: Boolean = false;

  toggleNav(){
    console.log('hello')
    this.navOpen = !this.navOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
