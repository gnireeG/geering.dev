import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  templateUrl: './burger-icon.component.html',
  styleUrls: ['./burger-icon.component.sass']
})
export class BurgerIconComponent implements OnInit {

  @Input() size: Number = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
