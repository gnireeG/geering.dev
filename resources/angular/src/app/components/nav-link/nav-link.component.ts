import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.sass']
})
export class NavLinkComponent implements OnInit {

  @Input() linkName: String = '';
  @Input() showLabel: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
