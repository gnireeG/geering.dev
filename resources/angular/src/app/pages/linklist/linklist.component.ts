import { Component, OnInit } from '@angular/core';
import { LinklistService } from 'src/app/linklist.service';
import { LinkInterface } from 'src/app/app.interfaces';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.sass']
})
export class LinklistComponent implements OnInit {

  constructor(private linklistService: LinklistService) {}

  public links!: Array<LinkInterface>
  public inputName: String = ''
  public inputUrl: String = ''
  public inputDescription: String = ''
  

  saveLink(): void{
    console.log(this.inputName)
    this.linklistService.store(this.inputName, this.inputUrl, this.inputDescription)
      .subscribe((data: any) =>{
        this.links = data
      })
  }

  ngOnInit(): void {
    this.linklistService.getLinks()
      .subscribe((data: any) =>{
        this.links = data
      })
  }

}
