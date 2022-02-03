import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbulb-icon',
  templateUrl: './lightbulb-icon.component.html',
  styleUrls: ['./lightbulb-icon.component.sass']
})
export class LightbulbIconComponent implements OnInit {

  @Input() size: Number = 2

  constructor() { }

  ngOnInit(): void {
  }

}
