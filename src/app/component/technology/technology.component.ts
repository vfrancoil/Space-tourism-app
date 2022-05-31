import { Component, OnInit } from '@angular/core';
import technology from '../../../assets/json/data.json';
import { TechnologyData } from 'src/app/model/technology-data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  data:TechnologyData[] = technology.technology;
  technologySelect:number = 0;
  dataItem:any;
  technologyAnimUp:boolean = false;
  technologyAnimDown:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.dataItem = this.data[this.technologySelect];
  }

  changeTechnology(e:number){
    if(this.technologySelect > e){
      this.technologyAnimUp = true;
    } else {
      this.technologyAnimDown = true;
    }
    this.technologySelect = e;

    setTimeout(()=>{
      this.technologyAnimUp = false;
      this.technologyAnimDown = false;
      this.dataItem = this.data[this.technologySelect];
    }, 300)
  }

}
