import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  templateUrl: './link-icon.component.html',
  styleUrls: ['./link-icon.component.sass']
})
export class LinkIconComponent implements OnInit {

  @Input() size: Number = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
