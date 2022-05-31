import { Component, OnInit } from '@angular/core';
import crew from '../../../assets/json/data.json';
import { CrewData } from 'src/app/model/crew-data';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  data:CrewData[] = crew.crew;
  crewMemberSelect:number = 0;
  dataItem:any;
  crewAnim:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.dataItem = this.data[this.crewMemberSelect];
  }

  changeMemberCrew(e:number){
    this.crewMemberSelect = e;
    this.crewAnim = true;
    setTimeout(()=>{
      this.crewAnim = false;
      this.dataItem = this.data[this.crewMemberSelect];
    }, 300)
  }

}
