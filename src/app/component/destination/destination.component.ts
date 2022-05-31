import { Component, OnInit } from '@angular/core';
import destinations from '../../../assets/json/data.json';
import { DestinationData } from 'src/app/model/destination-data';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  data:DestinationData[] = destinations.destinations;
  planetSelect:number = 0;
  dataItem:any;
  planetAnim:boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.dataItem = this.data[this.planetSelect];
  }

  changePlanet(e:number) {
    this.planetSelect = e;
    this.planetAnim = true;
    setTimeout(()=>{
      this.dataItem = this.data[this.planetSelect];
      this.planetAnim = false;
    }, 300)
  }
}
